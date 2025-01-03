import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import router from "./Router/index.js";
const app=express();
dotenv.config();
app.use(express.json());

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

app.use("/user",router);

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening at port ${process.env.PORT}`);
});