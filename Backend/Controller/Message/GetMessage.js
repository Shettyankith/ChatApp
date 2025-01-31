import Conversation from "../../Models/Conversation.js"
import Message from "../../Models/Messages.js"

const GetMessage=async(req,res)=>{
    try{
        // Get the reciever and sender id
        const recieverId=req.params.id;
        const senderId=req.user._id;
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        }).populate("messages");
        if(!conversation){
            return res.status(200).json({
                error:false,
                success:true,
                message:"No messages",
                data:[]
            });
        }
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