import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  const getLinkClass = (props) => {
    return clsx(s.link, props.isActive && s.active);
  };
  return (
    <div className={s.btns}>
      <NavLink to="/login" className={getLinkClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={getLinkClass}>
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthNav;
