import React from "react";
import chatUser from '../../Zustand/index.js'
import { useSocketContext } from "../../context/SocketProvider.jsx";

function ChatUser() {
  const { selectedUser } = chatUser();
  // online/offline status
    const {socket,onlineUsers}=useSocketContext();
    const isOnline=onlineUsers.includes(selectedUser._id);
  return (
    <>
      <div>
        <div className="flex space-x-4 p-4 bg-slate-700 hover:bg-slate-500 cursor-pointer transition-all duration-300">
          <div className={`avatar ${isOnline?'online':''}`}>
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div>
            <h6 className="font-medium text-2xl capitalize">{selectedUser?.username}</h6>
            <p className="font-light italic">{isOnline?'Online':"Offline"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
