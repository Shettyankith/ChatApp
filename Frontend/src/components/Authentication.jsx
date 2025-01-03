import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Authentication() {
  const [hidePassword, sethidePassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen bg-[#1d1923]">
      <div className="left p-5 w-[30%] bg-[#1d232a] h-[70%] rounded-tl-xl rounded-bl-xl lg:flex justify-center items-center flex-col space-y-4">
        <h3 className="text-5xl font-bold text-[#ad6af9] text-center">
          You're Back – Let's Chat 🫰
        </h3>
        <p className="text-xl font-medium text-center">
          Your <span className="text-[#ad6af9] italic">whirl</span> of
          connections is just one step away
        </p>

        <form className="space-y-4 mb-4 w-[80%]">
          <div className="w-full space-x-4 text-md border-0 border-b-[1px] p-2">
            <i class="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-[#1d232a] outline-none"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <span>This field is required</span>}
          <div className="w-full space-x-4 text-md border-0 border-b-[1px] p-2">
            <i class="fa-solid fa-key"></i>
            <input
              type={`{${hidePassword}?"password":"text"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-[#1d232a] outline-none w-[]"
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
          {errors.password && <span>This field is required</span>}
          <button type="submit" className="w-full bg-[#ad6af9]  font-bold py-2 rounded-lg hover:bg-[#1d232a] hover:text-[#ad6af9] border hover:border-2 transition-all duration-300 border-[#ad6af9]">
          Access Whirl
        </button>
        </form>
        
        <a
          href="/forgot-password"
          className="hover:underline hover:text-[#ad6af9]"
        >
          Forgot Password?
        </a>
        <p>
          Don't have an account?{" "}
          <a href="/signup">
            <span className="text-[#ad6af9] hover:underline">Sign up</span>{" "}
            here!
          </a>
        </p>
      </div>
      <div className="right w-[30%] h-[70%] rounded-tr-xl rounded-br-xl bg-[#1d232a] flex justify-center items-center">
        <img src="./login.png" alt="Login pic" />
      </div>
    </div>
  );
}

export default Authentication;
