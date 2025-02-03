import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors"; // Import CORS

const app = express();
const server = http.createServer(app);

// ✅ Allow CORS for Express requests
app.use(cors({
    origin: "http://localhost:4001", // Allow frontend URL
    methods: ["GET", "POST"]
}));

const users = {};

// ✅ Fix CORS for WebSockets
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001", // Allow frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"], // Allow necessary headers
        credentials: true // Allow cookies, auth headers, etc.
    }
});

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    
    const userId = socket.handshake.query.userId;
    if (userId) {
        users[userId] = socket.id;
        console.log(users);
    }

    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
    });
});

export { io, app, server };
