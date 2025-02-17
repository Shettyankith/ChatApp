import React, { useState } from 'react'
import chatUser from '../../Zustand/index.js'
import { useSocketContext } from "../../context/SocketProvider.jsx";
import ImagePreview from '../../components/ImagePreview.jsx';

function Singleuser({user}) {
  // Selecetd user
  const {selectedUser,setselecteduser}=chatUser();
  //check whether current user is selected or not
  const isSelected=selectedUser?._id===user._id;
  // online/offline status
  const {socket,onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(user._id);

  const [imageForPreview,setimageForPreview]=useState(null);
  return (
    // if selected change bg color
    <div className={`pl-10 flex  space-x-4 my-4 hover:bg-slate-600 transition-all duration-300 px-2 py-4 ${isSelected?"bg-slate-700":""}`}  >
        <div className={`avatar w-16 ${isOnline?'online':''}`}>
          <div className="w-24 rounded-full hover:cursor-pointer" onClick={() => setimageForPreview(user.profilePic || "./user3.png")}>
            {user.profilePic.length!=0?
            (<img src=  {user.profilePic}/>):
            (<img src="./user3.png" />)}
          </div>
        </div>
        <div className="align-self-center" onClick={()=>setselecteduser(user)}>
          <p className="font-medium text-xl capitalize">{user.username}</p>
          <p>{user.email}</p>
        </div>

        {/* Image Preview */}
        {
          imageForPreview && (
            <ImagePreview ImageUrl={imageForPreview} Close={()=>{setimageForPreview(null)}}/>
          )
        }
    </div>
  )
}

export default Singleuser