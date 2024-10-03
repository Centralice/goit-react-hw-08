import { useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div className={s.usermenu}>
      <p>Welcome, {user.name}!</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
