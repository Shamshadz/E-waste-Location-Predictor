import "./App.css";
import Rewards from "./pages/Rewards";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRouter from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //starting mei logged out ho user

  return (
    <div className="bg-black text-white w-screen h-[100vh]">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="login"
          element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}
        />
        <Route
          path="signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}
        />
        <Route
          path="dashboard"
          element={
            <PrivateRouter isLoggedIn={isLoggedIn}>
              <Dashboard></Dashboard>
            </PrivateRouter>
          }
        />
        <Route
          path="rewards"
          element={
            
              <Rewards></Rewards>
          
          }
        />
      </Routes>
    </div>
  );
}

export default App;
