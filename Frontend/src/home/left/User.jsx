import React from "react";
import Singleuser from "./Singleuser";
import {GetAllUsers} from "../../context/GetAllUsers";

function User() {
  const { loading, allUsers } = GetAllUsers();
  return (
    <div className=" mt-5 overflow-y-auto max-h-[82vh] scroller" >
      {/* User div */}
      {allUsers.map((user,index)=>{
          return <Singleuser key={index} user={user}/>
      })}
    </div>
  );
}

export default User;
