import express from "express"
import Signup  from "../Controller/User/Signup.js"
import SignIn from "../Controller/User/SignIn.js";
import SignOut from "../Controller/User/SignOut.js";
import AllUser from "../Controller/User/AllUser.js"
import decryptToken from "../Middleware/decryptToken.js"

const router=express.Router();

router.post("/signup",Signup);
router.post("/signin",SignIn);
router.get("/signout",SignOut);
router.get("/alluser",decryptToken,AllUser);

export default router; 