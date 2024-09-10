import s from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={s.usermenu}>
      <p>Welcome, user!</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
