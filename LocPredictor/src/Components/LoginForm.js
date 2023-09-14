import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  let [formData, setFormData] = useState({
    aadhar: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  let [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log(formData);
    navigate("/dashboard");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="w-full justify-center items-center flex flex-col gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Aadhar No. <sup className="text-pink-200">*</sup>
        </p>
        <input
          className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700 focus:border-blue-100"
          type="aadhar"
          name="aadhar"
          placeholder="Enter aadhar id"
          value={formData.aadhar}
          onChange={changeHandler}
          required
        ></input>
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          className="w-full relative bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={changeHandler}
          required
        ></input>
        <span
          className="absolute right-3 top-[34px]  text-2xl cursor-pointer"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fill="grey"></AiOutlineEyeInvisible>
          ) : (
            <AiOutlineEye fill="grey"></AiOutlineEye>
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 w-full max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="text-black w-full rounded-md py-2 px-5 mx-auto font-medium bg-yellow-500 mt-5">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
