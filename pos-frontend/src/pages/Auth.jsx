import React, { useState, useEffect } from "react";
import paswordClose from "../assets/password_close.svg";
import paswordOpen from "../assets/password_open.svg";

const Auth = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const [password, setPassword] = useState("")
  console.log(password)

  return (
    <section className="w-screen sm:w-full h-full flex flex-col items-center justify-center">
      <div className="h-fit w-fit text-4xl text-custom-pink mb-24">
        DineDeck
      </div>

      <form className="h-fit sm:w-fit w-full bg-custom-bg-2 rounded-2xl px-12 py-16 flex flex-col items-center justify-center">
        <div className="text-3xl">Login!</div>
        <div className="text-sm mt-6 hidden sm:block">
          Please enter your credentials below to continue
        </div>

        <div className="sm:w-[450px] w-[280px] mt-12 flex flex-col items-start">
          <label className="text-[11px] ml-1" htmlFor="username">
            Username
          </label>
          <input
            className="bg-custom-input-bg rounded-md w-full px-2 py-2 mt-1"
            type="text"
            id="username"
          />
        </div>

        <div className="relative z-10 sm:w-[450px] w-[280px] mt-7 flex flex-col items-start">
          <label className="text-[11px] ml-1" htmlFor="password">
            Password
          </label>
          <div className="relative w-full">
            <input
              className="bg-custom-input-bg rounded-md w-full px-2 py-2 mt-1"
              type={isEyeOpen ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={isEyeOpen ? paswordClose : paswordOpen}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
              alt=""
              onClick={() => setIsEyeOpen(!isEyeOpen)}
            />
            {/* <img src={paswordOpen} alt="" /> */}
          </div>
        </div>

        <div className="w-full h-fit flex flex-col justify-center items-center sm:flex-row sm:justify-between mt-3">
          <div className="flex gap-2 w-[280px] sm:w-fit">
            <input
              type="checkbox"
              className=" text-[12px] appearance-none w-4 h-4 border border-custom-pink rounded-sm checked:bg-custom-pink checked:border-custom-pink focus:ring-0"
              id="check"
            />
            <label className="text-[11.5px]" htmlFor="check">
              Remember Me
            </label>
          </div>
          <div className="text-[11.5px] w-[280px] sm:w-fit underline">
            Forgot Password?
          </div>
        </div>

        <button className="px-10 py-4 text-sm rounded-md bg-custom-pink text-black mt-8">
          Login
        </button>
      </form>
    </section>
  );
};

export default Auth;
