import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const getLinkClass = (props) => {
    return clsx(s.link, props.isActive && s.active);
  };
  return (
    <div className={s.navigation}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={getLinkClass}>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
