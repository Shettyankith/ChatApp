import { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthProvider";

const socketContext=createContext();

export const SocketProvider=({children})=>{
    const [socket,setsocket]=useState(null);
    const {currentUser}=useAuth();

    useEffect(()=>{
        if(currentUser){
            const socket=io(import.meta.env.VITE_BACKEND_URL,{
                query:{
                    userId:currentUser.user._id,
                }
            });
            setsocket(socket);
        }
    },[currentUser]);
    return(
        <socketContext.Provider value={{socket}}>
            {children}
        </socketContext.Provider>
    )
}