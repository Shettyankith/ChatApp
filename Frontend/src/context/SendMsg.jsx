import React, { useEffect, useState } from "react";
import chatUser from "../Zustand/index.js";
import axios from "axios";

function SendMsg() {
  // state for loading
  const [loading, setloading] = useState(false);
  const { selectedUser, messages, setmessages } = chatUser();

  // Move sendMessage function outside of useEffect
  const sendMessage = async (message) => {
    if (selectedUser && selectedUser._id) {
      try {
        setloading(true);
        const response = await axios.post(
          `/api/message/send/${selectedUser._id}`,
          { message },
          {
            validateStatus: (status) => status < 500,
          }
        );
        console.log("response from sendMessage:", response.data.messages);

        // Ensure messages update correctly
        setmessages([...messages, response.data.data]);
        // setmessages((prevMessages) => [...(prevMessages || []), response.data.data]);

        setloading(false);
      } catch (e) {
        console.log("Error sending message:", e);
        setloading(false);
      }
    }
  };

  // useEffect is no longer needed since we only call sendMessage when necessary
  return { sendMessage, loading };
}

export default SendMsg;
