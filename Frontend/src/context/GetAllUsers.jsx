import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import summaryAPI from "../Routes";

export const GetAllUsers = () => {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get(summaryAPI.getAllUsers.url, {
          Credentials: "included",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          validateStatus: function (status) {
            return status < 500;
          },
        });

        console.log("From API response", response.data);
        setAllUsers(response.data);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching users:", e);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { loading, allUsers };
};
