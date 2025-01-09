import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Router/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();
dotenv.config();
app.use(express.json());
app.use(cookieParser())   //to parse the cookie
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true,
}));

app.get("/",(req,res)=>{
    res.send("Home page");
});

// DB setup
try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
}catch(e){
    console.log("Database connection error",e);
}

app.use("/api/user",router);

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening at port ${process.env.PORT}`);
});