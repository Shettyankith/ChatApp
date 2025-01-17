import Conversation from "../../Models/Conversation.js"
import Message from "../../Models/Messages.js"

const GetMessage=async(req,res)=>{
    console.log("survived till here");
    try{
        // Get the reciever and sender id
        console.log("1");
        const recieverId=req.params.id;
        const senderId=req.user._id;
        console.log("2");
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        }).populate("messages");
        console.log("3")
        console.log("Conversation",conversation);
        if(!conversation){
            return res.status(200).json({
                error:false,
                success:true,
                message:"No messages",
                data:[]
            });
        }
        console.log("4")
        console.log(conversation);
        return res.status(201).json({
            error:true,
            success:false,
            message:"All messages fetched!",
            data:conversation
        }); 
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error:true,
            success:false,
            message:"Internal Server error! from getMessage api",
        });
    }
}

export default GetMessage;