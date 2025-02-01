import React from "react";
import Singleuser from "./Singleuser";
import {GetAllUsers} from "../../context/GetAllUsers";
import "../../App.css"

function User() {
  const { loading, allUsers } = GetAllUsers();
  const loadingArray=new Array(16).fill(null); 
  return (
    <div className=" mt-5 overflow-y-auto max-h-[82vh] scroller" >
      {/* User div */}
      {loading?
      // loading skeleton
      (loadingArray.map((_,index)=> (<div key={index} className="flex space-x-4 my-4 transition-all duration-300 px-4 py-2 ">
        <div className="avatar  w-16">
          <div className="w-24 rounded-full p-4 bg-slate-700 animate-pulse">
            
          </div>
        </div>
        <div className="align-self-center w-[80%]">
          <p className="font-medium text-xl bg-slate-700 py-2 my-2 w-full animate-pulse rounded-lg"></p>
          <p className="bg-slate-700 py-2 w-full animate-pulse my-2 rounded-lg"></p>
        </div>
    </div>)
      )):
      // list of users
      (allUsers?.map((user,index)=>{
          return <Singleuser key={index} user={user}/>
      }))}
      
    </div>
  );
}

export default User;


