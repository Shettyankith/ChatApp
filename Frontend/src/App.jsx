import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import { GetAllUsers } from "./context/GetAllUsers";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "./components/UpdateProfile";
import ForgotPassword from "../../Backend/Controller/User/Forgotpassword";


function App() {
  const { currentUser, setcurrentUser } = useAuth();
  console.log("LoggedIn user is-->",currentUser)
  const { loading, allUsers } = GetAllUsers();

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} theme="dark"/>
       
      <Routes>
       <Route
          path="/"
          element={
            currentUser ? (
              <div className="flex h-screen">
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/signin" />
            )
          }
        ></Route>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignIn />}
        ></Route>
         <Route
          path="/forgot-password"
          element={<ForgotPassword/>}
        ></Route>
        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
