import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};

export default Navigation;
