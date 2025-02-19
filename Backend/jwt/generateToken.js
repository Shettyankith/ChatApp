import jwt from "jsonwebtoken";

const generateToken=(userId,res)=>{
    // create, sign, set expiry of the token
    const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"2d",
    });

    // Set the cookie
    res.cookie("token",token,{
        httpOnly:false,
        secure:false,
        sameSite:"lax",
        path:"/",
    });
};

export default generateToken;