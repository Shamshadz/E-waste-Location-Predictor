import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";
import LoginPageAnimation from "../assets/animations/LoginMap";
import SignUpPageAnimation from "../assets/animations/SignUpMap";

const Template = ({ title, desc1, desc2, image, loginPage, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] justify-between py-12  gap-x-14 gap-y-0 mx-auto mt-5">
      <div className="flex flex-col justify-start w-[500px]">
        <h1 className="text-richblack-5 font-semibold text-[2.2rem] leading-[2.375rem] ">
          {title}
        </h1>
        <p className="text-[1.25rem] leading-[1.625rem] mt-6">
          <span className="text-richblack-100"> {desc1}</span>
          <br></br>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? ( //use this ternary operator syntax to show the hidden tags and elements
          <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        )}
        <div className="flex flex-col ">
          <div className="flex w-full justify-center items-center gap-x-2">
            <div className="h-[1px] w-full bg-richblack-700 "></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem] py-2">
              OR
            </p>
            <div className="h-[1px] w-full bg-richblack-700 "></div>
          </div>
          <button className="flex w-full justify-center items-center rounded-[8px] py-2 px-4 text-richblack-700 border border-richblack-700 gap-x-2">
            <FcGoogle></FcGoogle>
            <p className="text-richblack-100">Sign in with Google</p>
          </button>
        </div>
      </div>
      <div className="relative flex w-[520px] h-[500px]">
        {/* <img
          src={frameImage}
          alt="pattern"
          width={558}
          height={500}
          loading="lazy"
          className="absolute top-12 left-5"
        ></img>
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className="relative  "
        ></img> */}
        {loginPage ? <LoginPageAnimation /> : <SignUpPageAnimation />}
      </div>
    </div>
  );
};

export default Template;
