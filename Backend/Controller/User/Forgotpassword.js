// import SendEmail from "../../Middleware/SendEmail.js";
// import setResetCode from "../../jwt/setResetCode.js"

// const ForgotPassword=async(requestAnimationFrame,res)=>{
//     try{
//         // const email=req.user.email;
//         // console.log("Reciever email",email);
//         // // reset code generation
//         // const resetCode=crypto.randomInt(100000,99999).toString();
//         // // 10 mins expiry date
//         // const resetCodeExpires=Date.now() + 10 * 60 * 1000;
//         // await SendEmail(email,"Paswrod reset code",`Your 6 digit password reset code is ${resetCode}`);
//         // setResetCode(resetCode,resetCodeExpires,res);
//         res.status(201).JSON({
//             success:true,
//             error:false,
//             // resetCode:resetCode,
//             // resetCodeExpires:resetCodeExpires,
//             message:"OTP message successfully",
//         });
//     }catch(e){
//         res.status(500).JSON({
//             error:true,
//             success:false,
//             message:"Internal server error",
//         })
//     }
// }

// export default ForgotPassword;