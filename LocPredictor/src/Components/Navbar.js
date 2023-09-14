import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import coin from "../assets/coin.png";
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="text-white flex items-center w-11/12 max-w-[1160px] py-6 mx-auto justify-between">
      <Link to="/">
        {/* <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img> */}
        <div className="text-2xl font-semibold">LocPredictor</div>
      </Link>
      <nav className="flex">
        <ul className="flex gap-10 text-richblack-100">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Login-SinUp-Logout-Dashboard */}
      <div className="flex justify-evenly gap-3">
        {!isLoggedIn && ( //way to write the code in condition to execute or not to execute
          <Link to="/login">
            <button
              className="py-3 px-5 bg-richblack-800 cursor-pointer select-none rounded-md border border-richblack-700"
              onClick={() => {
                // setIsLoggedIn(true);
                // toast.success("Logged In");
              }}
            >
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button
              className="py-3 px-5 bg-richblack-800 cursor-pointer select-none rounded-md border border-richblack-700"
              onClick={() => {
                // setIsLoggedIn(true);
                // toast.success("Logged In");
              }}
            >
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="py-3 px-5 bg-richblack-800 cursor-pointer select-none rounded-md border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <div>
            <Link to="/dashboard">
              <button className="py-3 px-5 bg-richblack-800 cursor-pointer select-none rounded-md border border-richblack-700">
                Dashboard
              </button>
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <Link to="/rewards"><img src={coin}></img></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
