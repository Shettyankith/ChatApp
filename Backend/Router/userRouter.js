import express from "express"
import Signup  from "../Controller/User/Signup.js"
import SignIn from "../Controller/User/SignIn.js";
import SignOut from "../Controller/User/SignOut.js";
import AllUser from "../Controller/User/AllUser.js"
import UpdateProfile from "../Controller/User/UpdateProfile.js";
import decryptToken from "../Middleware/decryptToken.js"
// import ForgotPassword from "../Controller/User/Forgotpassword.js";

const userRouter=express.Router();

userRouter.post("/signup",Signup);
userRouter.post("/signin",SignIn);
userRouter.get("/signout",SignOut);
userRouter.get("/alluser",decryptToken,AllUser);
userRouter.post("/updateProfile",decryptToken,UpdateProfile);
// userRouter.get("/forgot-password",decryptToken,UpdateProfile);

export default userRouter; 