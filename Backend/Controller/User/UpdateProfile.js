import User from "../../Models/User.js";

const UpdateProfile=async(req,res)=>{
    try{
        const {profilePic,username,bio}=req.body;
        const userId=req.user._id;
        // server validations
        if(!username){
            return res.status(400).json({
                success:false,
                error:true,
                message:"Please provide username",
            });
        }
        if(!bio){
            return res.status(400).json({
                success:false,
                error:true,
                message:"Please provide bio",
            });
        }
        // fins and update user
        const updatedUser=await User.findByIdAndUpdate(
            userId,
            {profilePic,username,bio},
            { new: true, runValidators: true },
        );
        return res.status(201).json({
            success:true,
            error:false,
            message:"Profile updated successfully!",
            data:updatedUser,
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error:true,
            success:false,
            message:"Internal server error!"
        })
    }
}

export default UpdateProfile;