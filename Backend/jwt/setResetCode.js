import jwt from "jsonwebtoken";

const setResetCode=(resetCode,resetCodeExpires,res)=>{
    // create, sign, set expiry of the token
    const resetcode=jwt.sign({resetCode,resetCodeExpires},process.env.JWT_SECRET_KEY,{
        expiresIn:"10min",
    });

    // Set the cookie
    res.cookie("resetcode",resetcode,{
        httpOnly:false,
        secure:false,
        sameSite:"lax",
        path:"/",
    });
};

export default setResetCode;