import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors"; 

const app = express();
const server = http.createServer(app);


app.use(cors({
    origin: "http://localhost:4001", 
    methods: ["GET", "POST"]
}));

const users = {};


const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001", 
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"], // Allow necessary headers
        credentials: true // Allow cookies, auth headers
    }
});

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    
    const userId = socket.handshake.query.userId;
    if (userId) {
        users[userId] = socket.id;
        console.log(users);
    }

    io.emit("getOnline",Object.keys(users));

    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
        delete users[userId];
        io.emit("getOnline",Object.keys(users));
    });

});

// real time message code
export const getRecieverSocketId=(recieverId)=>{
    return users[recieverId];
}

export { io, app, server };
