import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import summaryAPI from "../Routes";
import axios from "axios";
import { useAuth } from "../context/AuthProvider.jsx";

function SignIn() {
  // use context for gobal use 
    const {currentUser,setcurrentUser}=useAuth();
  // form validation using react hook form
  const [hidePassword, sethidePassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API request
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(summaryAPI.signin.url, userInfo,{
        headers: {
            "Content-Type": "application/json",
        },validateStatus: function (status) {
          return status < 500;             // Resolve for all statuses below 500
        },
    })
      .then((res) => {
        if (res.data.success) {
          console.log("logged in successfully. Response from backend:");
          console.log(res.data);
          // set the local storage
          localStorage.setItem("token", JSON.stringify(res.data));
           // store the user detail in context for golbal use
          setcurrentUser(res.data);
          // console.log("From Login AuthContext--->",currentUser)
        } else {
          console.log("Error from backend:", res.data.message);
        }
      })
      .catch((e) => { 
        console.log("There was an error in the API request.");
      if (error.response) {
        // Backend errors
        console.error("Response Error:", error.response.data.message);
      } else {
        // Network or client-side errors
        console.error("Error Message:", error.message);
      }
      });
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center h-[100vh] bg-[#1d1923] lg1:pt-[40px]">
      <div className="left p-5 w-[80%] lg:w-[30%] bg-[#1d232a] h-[70%] rounded-tl-xl rounded-bl-xl lg:flex justify-center items-center flex-col space-y-4">
        <h3 className="text-5xl font-bold text-[#ad6af9] text-center">
          You're Back – Let's Chat 🫰
        </h3>
        <p className="text-xl font-medium text-center">
          Your <span className="text-[#ad6af9] italic">whirl</span> of
          connections is just one step away
        </p>

        <form className="space-y-4 mb-4 w-[80%] lg:block flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="w-full space-x-4 text-md border-0 border-b-[1px] p-2">
            <i class="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-[#1d232a] outline-none  w-[78%]"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <span className="text-red-400">This field is required</span>}


          {/*Password */}
          <div className="w-full space-x-4 text-md border-0 border-b-[1px] p-2">
            <i class="fa-solid fa-key"></i>
            <input
              type={hidePassword ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-[#1d232a] outline-none w-[78%]"
              {...register("password", { required: true })}
            />   
            <i
              className={`fa-solid ${
                hidePassword ? "fa-eye" : "fa-eye-slash"
              }`}
              onClick={() => {
                sethidePassword(!hidePassword);
              }}
            ></i>
          </div>
          {errors.password && <span className="text-red-400">This field is required</span>}
          <button type="submit" className="w-full bg-[#ad6af9]  font-bold py-2 rounded-lg hover:bg-[#1d232a] hover:text-[#ad6af9] border hover:border-2 transition-all duration-300 border-[#ad6af9]">
          Access Whirl
        </button>
        </form>
        
        <a
          href="/forgot-password"
          className="hover:underline hover:text-[#ad6af9] text-center block"
        >
          Forgot Password?
        </a>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/signup">
            <span className="text-[#ad6af9] hover:underline">Sign up</span>{" "}
            here!
          </a>
        </p>
      </div>
      <div className="right w-[80%] lg:w-[30%] h-[70%] rounded-tr-xl rounded-br-xl bg-[#1d232a] flex justify-center items-center ">
        <img src="./login.png" alt="Login pic" className="h-[100%]"/>
      </div>
    </div>
  );
}

export default SignIn;
