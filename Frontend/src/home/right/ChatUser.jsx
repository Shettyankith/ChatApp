import React from "react";
import chatUser from '../../Zustand/index.js'

function ChatUser() {
  const { selectedUser } = chatUser();
  return (
    <>
      <div>
        <div className="flex space-x-4 p-4 bg-slate-700 hover:bg-slate-500 cursor-pointer transition-all duration-300">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div>
            <h6 className="font-medium text-xl">{selectedUser?.username}</h6>
            <p className="font-medium">Online</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
