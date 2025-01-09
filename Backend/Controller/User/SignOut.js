const SignOut=async(requestAnimationFrame,res)=>{
    try{
        console.log("control reached here")
        res.clearCookie("token");
        res.status(200).json({
            error:false,
            success:true,
            messaage:"User logged out successfully",
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            error:true,
            success:false,
            message:"Internal Server error",
        })
    }
}

export default SignOut;