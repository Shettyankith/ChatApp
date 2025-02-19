import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Router/userRouter.js";
import messageRouter from "./Router/messageRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {app,server} from "./socket/server.js"

// const app=express();
dotenv.config();
app.use(express.json());
app.use(cookieParser())   //to parse the cookie
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));


// DB setup
try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
}catch(e){
    console.log("Database connection error",e);
}

app.use("/api/user",userRouter);
app.use("/api/message",messageRouter);

app.get("/",(req,res)=>{
    res.send("Hello world");
})

server.listen(process.env.PORT,()=>{
    console.log(`App is listening at port ${process.env.PORT}`);
});