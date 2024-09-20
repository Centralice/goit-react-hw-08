import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={s.btns}>
      <NavLink
        to="/login"
        className={(props) => {
          return clsx(s.link, props.isActive && s.active);
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={(props) => {
          return clsx(s.link, props.isActive && s.active);
        }}
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthNav;
