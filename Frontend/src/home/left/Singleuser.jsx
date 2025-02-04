import React from 'react'
import chatUser from '../../Zustand/index.js'
import { useSocketContext } from "../../context/SocketProvider.jsx";

function Singleuser({user}) {
  // Selecetd user
  const {selectedUser,setselecteduser}=chatUser();
  //check whether current user is selected or not
  const isSelected=selectedUser?._id===user._id;
  // online/offline status
  const {socket,onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(user._id);
  return (
    // if selected change bg color
    <div className={`pl-10 flex space-x-4 my-4 hover:bg-slate-600 transition-all duration-300 px-2 py-4 ${isSelected?"bg-slate-700":""}`}  onClick={()=>setselecteduser(user)}>
        <div className={`avatar w-16 ${isOnline?'online':''}`}>
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="align-self-center">
          <p className="font-medium text-xl capitalize">{user.username}</p>
          <p>{user.email}</p>
        </div>
    </div>
  )
}

export default Singleuser