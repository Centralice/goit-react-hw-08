import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  return (
    <div className={s.usermenu}>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
