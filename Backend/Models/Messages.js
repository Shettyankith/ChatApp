import mongoose from "mongoose"

const messageSchema=mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    message:{
        type:String,
        required:true,
        maxLength:1000,
        trim:true,
        validate:[
            {
                validator:(value)=>value.length>0,
                message:"Message cannot be empty",
            }
        ]
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
},{
    timestamp:true,
});

const Message=mongoose.model("message",messageSchema);

export default Message;