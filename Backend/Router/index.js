import express from "express"
import Signup  from "../Controller/User/Signup.js"
import SignIn from "../Controller/User/SignIn.js";
import SignOut from "../Controller/User/SignOut.js";

const router=express.Router();

router.post("/signup",Signup);
router.post("/signin",SignIn);
router.get("/signout",SignOut);

export default router; 