import React from "react";
import { useAuth } from "../../context/AuthProvider";

function Messages({message}) {
  const { currentUser } = useAuth();
  const isMe=currentUser._id===message.sender;
  return (
    <div className="my-2">
      <div className={`chat  ${isMe?'chat-end':'chat-start'}`}>
        <div className={`chat-bubble  ${isMe?'chat-bubble-accent':'chat-bubble-primary'}`}>
          {message.message}
        </div>
      </div>
    </div>
  );
}

export default Messages;
