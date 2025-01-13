import Conversation from "../../Models/Conversation.js"
import Message from "../../Models/Messages.js"

const GetMessage=async(req,res)=>{
    try{
        const recieverId=req.params.id;
        const senderId=req.user._id;
        let conversation=await Conversation.findOne({__id:"67852135a6d15b26183383dd"}).populate("messages")
        // let conversation=await Conversation.findOne({
        //     participants:{$all:[senderId,recieverId]}
        // });
        // console.log("Conversation",conversation);
        // if(!conversation){
        //     return res.status(200).json({
        //         error:false,
        //         success:true,
        //         message:"No messages",
        //         data:[]
        //     });
        // }
        console.log(conversation);
        return res.status(201).json({
            error:true,
            success:false,
            message:"All messages fetched!",
            data:conversation.messages
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