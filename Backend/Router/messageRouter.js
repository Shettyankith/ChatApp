import express from "express";
import SendMessage from "../Controller/Message/SendMessage.js";
import decryptToken from "../Middleware/decryptToken.js";
import GetMessage from "../Controller/Message/GetMessage.js"

const messageRouter=express.Router();

messageRouter.post("/send/:id",decryptToken,SendMessage);
messageRouter.get("/get/:id",decryptToken,GetMessage);

export default messageRouter;