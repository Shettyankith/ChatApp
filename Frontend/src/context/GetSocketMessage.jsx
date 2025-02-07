import { useEffect } from "react";
import { useSocketContext } from "./SocketProvider";
import chatUser from "../Zustand";

function useGetSocketMessages() {
  const { socket } = useSocketContext();
  const { messages, setmessages } = chatUser();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      console.log("New message received:", newMessage);

      // Functional update to prevent stale state issues
      setmessages((prevMessages) => [...prevMessages, newMessage]);

      console.log("After updating message array", messages);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, setmessages]);

  return { messages }; // Return messages if needed
}

export default useGetSocketMessages;
