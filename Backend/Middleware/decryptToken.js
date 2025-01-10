import jwt from "jsonwebtoken"
import User from "../Models/User.js"

const decryptToken=async(req,res,next)=>{
    try{
        // Access the token
        const token=req.cookies.token||null;
        console.log("control reached here")
        console.log(token);
        if(!token){
            return res.status(401).json({
                error:true,
                success:false,
                message:"Access Denied",
            })
        }
        // verify the token
        const verifiedUser=jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!verifiedUser){
            return res.status(403).json({
                error:true,
                success:false,
                message:"Invalid token",
            })
        }
        // extract the user
        const user=await User.findById(verifiedUser.userId).select("-password");
        if(!user){
            return res.status(404).json({
                error:true,
                success:false,
                message:"User not found",
            })
        }
        req.user=user;
        next();
    }catch(e){
        res.status(500).json({
            error:true,
            success:false,
            message:"Internal  error!"
        })
    }
}

export default decryptToken;