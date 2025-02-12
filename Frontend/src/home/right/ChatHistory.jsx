import React, { useEffect, useRef } from "react";
import Messages from "./Messages";
import GetSelectedUserMsg from "../../context/GetSelectedUserMsg";
import useGetSocketMessages from "../../context/GetSocketMessage";

function ChatHistory() {
  const { messages, loading } = GetSelectedUserMsg();
  useGetSocketMessages(); 

  const chatContainerRef = useRef(null); 

  //Scroll to the bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }, 100); 
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col overflow-y-auto min-h-[76vh] lg:min-h-[82vh] max-h-[75vh]"
    >
      {loading ? (
        <p>Loading...</p>
      ) : messages?.length > 0 ? (
        messages.map((message) => (
          <div key={message._id}>
            <Messages message={message} />
          </div>
        ))
      ) : (
        <p className="text-center italic">No messages yet. Start a conversation! 💬</p>
      )}
    </div>
  );
}

export default ChatHistory;
