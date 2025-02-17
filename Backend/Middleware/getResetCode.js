import jwt from "jsonwebtoken"
import User from "../Models/User.js"

const getResetCode=async(req,res,next)=>{
    try{
        // get the cookie
        const cookieData=req.cookies.resetcode||null;
        if(!cookieData){
            return res.status(401).json({
                error:true,
                success:false,
                message:"Code not found",
            })
        }
        // get the 6 digit code
        const secretData=jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!secretData){
            return res.status(403).json({
                error:true,
                success:false,
                message:"Invalid Code",
            })
        }
        req.secretData=secretData;
        next();
    }catch(e){
        res.status(500).json({
            error:true,
            success:false,
            message:"Internal  error!"
        })
    }
}

export default getResetCode;