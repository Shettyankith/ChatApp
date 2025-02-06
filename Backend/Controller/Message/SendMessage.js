import Conversation from "../../Models/Conversation.js";
import Message from "../../Models/Messages.js";
import { getRecieverSocketId } from "../../socket/server.js";
import { io } from "../../socket/server.js";

const SendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const receiverId=req.params.id;
        const senderId=req.user._id;
        // get receiver socket id
        const receiverSocketId=getRecieverSocketId(receiverId);
        // check whether the converstaion already exists
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        });
        // Create new conversation
        if(!conversation){
            const newConversation=await Conversation.create({
                participants:[senderId,receiverId],
            });
            // create a new message
            const newMessage=new Message({ 
                sender:senderId,
                receiver:receiverId,
                message,
            });
            // save and push the message into conversation
            if(newMessage){
                newConversation.messages.push(newMessage._id);
            }
            await Promise.all([newMessage.save(),newConversation.save()]);
            // real time screen update of messages
            if(receiverSocketId){
                io.to(receiverSocketId).emit("newMessage",newMessage);
            }
            const populatedConversation = await newConversation.populate("messages");
            // send response
            return res.status(201).json({
                success:true,
                error:false,
                message:"message sent successfully",
                data:populatedConversation,
            });
        }

        // If the conversation already exists
        const newMessage=new Message({ 
            sender:senderId,
            receiver:receiverId,
            message,
        });     
        await newMessage.save();
        conversation.messages.push(newMessage._id);
        await conversation.save();
         // real time screen update of messages
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        const updatedConversation = await Conversation.findById(conversation._id).populate("messages");
        // console.log(updatedConversation);
        return res.status(201).json({
            success:true,
            error:false,
            message:"message sent successfully",
            data:updatedConversation,
        });
    }catch(e){
        console.log("From SendMessage file",e);
        return res.status(500).json({
            error:true,
            success:false,
            message:"Inernal server error!!!!"
        })
    }
}

export default SendMessage;