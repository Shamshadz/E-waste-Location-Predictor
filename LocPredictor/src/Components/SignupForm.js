import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  let [formData, setFormData] = useState({
    accountType: "",
    firstname: "",
    lastname: "",
    aadhar: "",
    password: "",
    confirmpassword: "",
  });

  let [accountType, setAccountType] = useState("personal");
  function changeHandler(event) {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
      accountType,
    }));
  }
  let navigate = useNavigate();
  let [showPassword, setShowPassword] = useState(false);
  let [showPassword2, setShowPassword2] = useState(false);
  function submitHandler(event) {
    event.preventDefault();
    if (formData.confirmpassword !== formData.password) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    console.log(formData);
    navigate("/login");
  }
  return (
    <div className="flex flex-col gap-y-4 mt-6 w-[100%]">
      {/* Student-Instructor tab */}

      <div className="w-fit bg-richblack-800 text-richblack-100 py-1 px-1 rounded-2xl flex">
        <button
          className={`${
            accountType === "personal"
              ? "bg-black py-2 px-4 text-white rounded-full "
              : "bg-transparent py-2 px-4 text-richblack-100"
          }`}
          onClick={() => {
            setAccountType("personal");
          }}
        >
          Personal
        </button>

        <button
          className={`${
            accountType === "industry"
              ? "bg-black py-2 px-4 text-white rounded-full "
              : "bg-transparent py-2 px-4 text-richblack-100"
          }`}
          onClick={() => {
            setAccountType("industry");
          }}
        >
          Industry
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-y-3 w-[95%]
      "
      >
        {/* first name and last name */}
        <div className="flex justify-between w-full gap-y-3">
          <label className="w-[47%]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] w-full">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700 focus:border-blue-100"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={FormData.firstname}
            ></input>
          </label>
          <label className="w-[50%]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700 focus:border-blue-100"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={FormData.lastname}
            ></input>
          </label>
        </div>
        {/* aadhar address */}
        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Aadhar No.<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="aadhar"
            name="aadhar"
            className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700 focus:border-blue-100"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={FormData.aadhar}
          ></input>
        </label>
        {/* createPassword and Confirm Password */}
        <div className="flex justify-between">
          <label className="relative w-[47%]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full relative bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={FormData.password}
            ></input>
            <span
              className="absolute right-3 top-[35px]  text-2xl cursor-pointer"
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
          </label>
          <label className="relative w-[50%]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword2 ? "text" : "password"}
              name="confirmpassword"
              onChange={changeHandler}
              className="w-full relative bg-richblack-800 rounded-[0.5rem] text-richblack-5 py-2 px-3 border-[1px] border-richblack-700"
              placeholder="Enter Confirm Password"
              value={FormData.confirmpassword}
            ></input>
            <span
              className="absolute right-3 top-[35px]  text-2xl cursor-pointer"
              onClick={() => {
                setShowPassword2(!showPassword2);
              }}
            >
              {showPassword2 ? (
                <AiOutlineEyeInvisible fill="grey"></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye fill="grey"></AiOutlineEye>
              )}
            </span>
          </label>
        </div>
        <button className=" bg-yellow-400 text-black py-2 px-4 rounded-md font-semibold mt-4">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
