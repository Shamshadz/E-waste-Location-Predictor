import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Rewards from "../pages/Rewards";

function PrivateRouter(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn === true) return <div><Dashboard></Dashboard></div>;
  else return <Navigate to="/login"></Navigate>;
 
}

export default PrivateRouter;
