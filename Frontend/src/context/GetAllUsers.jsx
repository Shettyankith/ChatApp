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
        const response = await axios.get("/api/user/alluser", {
          validateStatus: function (status) {
            return status < 500;
          },
        });
        setAllUsers(response.data.data);
        if(allUsers===undefined||!allUsers){
          setLoading(true);
        }else{
          setLoading(false);
        }
       
      } catch (e) {
        console.error("Error fetching users:", e);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { loading, allUsers };
};
