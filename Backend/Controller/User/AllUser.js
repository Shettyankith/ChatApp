import User from "../../Models/User.js";

const AllUser=async(req,res)=>{
    try{
        // get loggedinuserID
        const loggedUser=req.user._id;
        // except loggedin user get all other users in database
        const allUserDetails=await User.find({_id:{$ne:loggedUser}}).select("-password");
        return res.status(201).json({
            success:true,
            error:false,
            message:"All user details fetched",
            data:allUserDetails,
        })
    }catch(e){
        return res.status(500).json({
            error: true,
            success: false,
            message: "Internal Server Error",
          });
    }
}

export default AllUser;