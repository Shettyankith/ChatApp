import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthProvider";

const socketContext=createContext();

export const useSocketContext=()=>{
    return useContext(socketContext);
}

export const SocketProvider=({children})=>{
    const [socket,setsocket]=useState(null);
    const {currentUser}=useAuth();
    const [onlineUsers,setonlineUsers]=useState([]);

    useEffect(()=>{
        if(currentUser){
            const socket=io(import.meta.env.VITE_BACKEND_URL,{
                query:{
                    userId:currentUser.user._id,
                }
            });
            setsocket(socket);
            socket.on("getOnline",(users)=>{
                setonlineUsers(users);
                console.log("Socket disconnected from getOnline");
            });
            return ()=>socket.close();
        }
    },[currentUser]);
    return(
        <socketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </socketContext.Provider>
    )
}