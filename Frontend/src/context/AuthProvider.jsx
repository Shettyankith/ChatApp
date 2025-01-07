import React, { createContext, useState,useContext } from "react";

// create the authcontext
export const AuthContext=createContext();

export function AuthProvider({children}){
    // get user data from localstorage or cookie which has been stored during signup/signin
    const intialUserInfo=localStorage.getItem("token")||null;
    // parse the user & store in state variable
    const [currentUser,setcurrentUser]=useState(intialUserInfo?JSON.parse(intialUserInfo):undefined);
    return(
        // Wrap the AuthContext for all children 
        <AuthContext.Provider value={{currentUser,setcurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
}

// export the context as useAuth
export const useAuth=()=>useContext(AuthContext);
