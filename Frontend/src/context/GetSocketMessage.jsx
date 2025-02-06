import React, { useEffect } from 'react'
import { useSocketContext } from './SocketProvider'
import chatUser from '../Zustand';

function GetSocketMessage() {
    const {socket}=useSocketContext();
    const {messages,setmessages}=chatUser();
    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            setmessages(...messages,newMessage);
        });
    },[socket,messages,setmessages]);
}

export default GetSocketMessage;