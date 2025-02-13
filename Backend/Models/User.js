import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    profilePic:{
        type: String,
        default: "",
    },
    bio:{
        type: String,
        maxlength: 100,
        default: "",
    }
},{
    timestamps:true,
});

const User=mongoose.model("user",UserSchema);

export default User;