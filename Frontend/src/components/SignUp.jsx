import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import summaryAPI from "../Routes";
import { useAuth } from "../context/AuthProvider.jsx";
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate=useNavigate();
  // use context for gobal use 
  const {currentUser,setcurrentUser}=useAuth();
  // console.log("From AuthContext--->",currentUser)
  // hide and see logic
  const [hidePassword, sethidePassword] = useState(false);
  const [hideconfirmPassword, sethideconfirmPassword] = useState(false);
   
  // Form validation using react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", " ");
  const confirmPassword = watch("confirmPassword", " ");
  const passwordMatch = (value) => {
    return value === password || "Passwords don’t match! Looks like they’re playing hide and seek. 🫣";
  };

  // API request
  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    await axios
      .post("/api/user/signup", userInfo,{
        headers: {
            "Content-Type": "application/json",
        },validateStatus: function (status) {
          return status < 500;             // Resolve for all statuses below 500
        },
    })
      .then((res) => {
        if (res.data.success) {
          // set the local storage
          localStorage.setItem("token", JSON.stringify(res.data.user));
          // store the user detail in context for golbal use
          setcurrentUser(res.data.user);
          toast.success("You're officially part of the squad!🤝");
          navigate("/updateProfile");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((e) => { 
      if (error.response) {
        // Backend errors
        toast.error("Oops! Something went wrong. Maybe the server tripped over? 🤖");
      } else {
        // Network or client-side errors
        toast.error("Signup failed. Did you fill in everything correctly? 🤨");
      }
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-screen bg-[#1d1923] text-white">
      <div className="left p-5 w-[90%] lg:w-[40%] bg-[#1d232a] h-[80%] ropunded-tr-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:flex justify-center items-center flex-col space-y-4">
        <h3 className="text-3xl  lg:text-5xl font-bold text-[#ad6af9] text-center leading-snug">
          Connect, Chat, and Collaborate
        </h3>
        <p className="text-xl font-medium text-center lg:w-[85%] w-full">
          Whirl your way into conversations that matter –{" "}
          <span className="text-[#ad6af9] italic">Join us today!</span>
        </p>

        <form
          className="space-y-4 mb-4 lg:w-[80%] w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Username */}
          <div className="w-full space-x-4 text-md border-0 border-b-[1px] p-2">
            <i className="fa-solid fa-user"></i>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Username"
              className="bg-[#1d232a] outline-none  w-[78%]"
              {...register("username", { required: true })}
            />
          </div>
          {errors.username && (
            <span className="text-red-400">⚠ This field is required</span>
          )}

          {/* Email */}
          <div className="w-full space-x-4 text-md border-0 mb-2 border-b-[1px] p-2">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-[#1d232a] outline-none  w-[78%]"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-400">⚠ This field is required</span>
          )}

          {/* Password */}
          <div className="w-full space-x-4 text-md border-0 mb-2 border-b-[1px] p-2">
            <i className="fa-solid fa-key"></i>
            <input
              type={hidePassword ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-[#1d232a] outline-none w-[83%]"
              {...register("password", { required: true })}
            />
            <i
              className={`fa-solid ${hidePassword ? "fa-eye" : "fa-eye-slash"}`}
              onClick={() => {
                sethidePassword(!hidePassword);
              }}
            ></i>
          </div>
          {errors.password && (
            <span className="text-red-400">⚠ This field is required</span>
          )}

          {/* Confirm Password */}
          <div className="w-full space-x-4 text-md border-0 mb-2 border-b-[1px] p-2">
            <i className="fa-solid fa-key"></i>
            <input
              type={hideconfirmPassword ? "password" : "text"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="bg-[#1d232a] outline-none w-[83%]"
              {...register("confirmPassword", {
                required: true,
                validate: passwordMatch,
              })}
            />
            <i
              className={`fa-solid ${
                hideconfirmPassword ? "fa-eye" : "fa-eye-slash"
              }`}
              onClick={() => {
                sethideconfirmPassword(!hideconfirmPassword);
              }}
            ></i>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-400">
             {errors.confirmPassword.message ? errors.confirmPassword.message : "⚠ This field is required"}
            </span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ad6af9] mt-5 font-bold py-2 rounded-lg hover:bg-[#1d232a] hover:text-[#ad6af9] border hover:border-2 transition-all duration-300 border-[#ad6af9]"
          >
            Whirl Your Way In
          </button>
        </form>

        <p>
          Already have an account?{" "}
        
            <Link to={"/signin"} className="text-[#ad6af9] hover:underline text-center">Sign In</Link>{" "}
            here!
         
        </p>
      </div>
      <div className="right w-[90%] lg:w-[30%] h-fit lg:h-[80%] rounded-tr-xl rounded-br-xl bg-[#1d232a] flex justify-center items-center">
        <img src="./chats.png" alt="Login pic" />
      </div>
    </div>
  );
}

export default SignUp;
