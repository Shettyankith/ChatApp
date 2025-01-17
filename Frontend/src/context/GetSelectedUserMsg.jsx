import React, { useEffect, useState } from "react";
import chatUser from "../Zustand/index.js";
import axios from "axios";
import Cookies from "js-cookie";

function GetSelectedUserMsg() {
  // state for loading and messages
  const [loading, setloading] = useState(false);
  const { selectedUser, messages, setmessages } = chatUser();
  useEffect(() => {
    // API call to fetch the messages between particular users
    const getMessage = async () => {
      if (selectedUser && selectedUser._id) {
        try {
          setloading(true);
          console.log("Sending the api request");
          const token = Cookies.get("token");
          console.log(token);
          const response = await axios.get(
            `http://localhost:8080/api/message/get/${selectedUser._id}`,
            {
              
    validateStatus: (status) => status < 500,
            }
          );
          console.log("response from getmessage", response.data);
          setmessages(response.data);
          setloading(false);
        } catch (e) {
          console.log("Some error in fetching the selected user message", e);
        }
      }
    };
    getMessage();
  }, [selectedUser, setmessages]);
  // export the data back to User.jsx
  return { messages, loading };
}

export default GetSelectedUserMsg;
