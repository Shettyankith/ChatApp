import Conversation from "../../Models/Conversation.js";
import Message from "../../Models/Messages.js";

const SendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const receiverId=req.params.id;
        const senderId=req.user._id;
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
                console.log("The conversation created is-->",newConversation);
            }
            await Promise.all([newMessage.save(),newConversation.save()]);
            // send response
            return res.status(201).json({
                success:true,
                error:false,
                message:"message sent successfully",
                data:newConversation,
            });
        }

        // If the conversation already exists
        const newMessage=new Message({ 
            sender:senderId,
            receiver:receiverId,
            message,
        });     
        conversation.messages.push(newMessage._id);
        await conversation.save();
        return res.status(201).json({
            success:true,
            error:false,
            message:"message sent successfully",
            data:conversation,
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