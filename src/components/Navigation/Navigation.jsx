import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getLinkClass = (props) => {
    return clsx(s.link, props.isActive && s.active);
  };
  return (
    <div className={s.navigation}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getLinkClass}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
