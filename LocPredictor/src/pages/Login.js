import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/login.jpg";

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Log in to Make a Difference."
        desc2="Together, Let's Make a Greener Tomorrow."
        image={loginImg}
        loginPage={true}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      ></Template>

    </div>
  );
}
export default Login;
