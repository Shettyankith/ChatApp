import jwt from "jsonwebtoken";

const generateToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"2d",
    });

    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"lax"
    });
};

export default generateToken;