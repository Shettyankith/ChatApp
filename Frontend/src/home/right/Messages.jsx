import React from "react";

function Messages({message}) {
  return (
    <div className="my-2">
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">
          {message.message}
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          What kind of nonsense is this
        </div>
      </div>
    </div>
  );
}

export default Messages;
