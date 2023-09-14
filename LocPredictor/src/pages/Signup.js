import Template from "../Components/Template";
import signupImg from "../assets/signup.png";
function Signup({ setIsLoggedIn }) {
  return (
    <div>
      <Template
        title="Join Our E-waste Revolution!"
        desc1="Create a new account to start using our E-waste location predictor."
        desc2="Swachha Bharat Sundar Bharat"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      ></Template>
    </div>
  );
}

export default Signup;
