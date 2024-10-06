import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to="/login" /> : component;
};

export default PrivateRoute;
