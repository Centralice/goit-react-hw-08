import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <NavLink
        to="/"
        className={(props) => {
          return clsx(s.link, props.isActive && s.active);
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={(props) => {
          return clsx(s.link, props.isActive && s.active);
        }}
      >
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
