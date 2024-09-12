import { Link } from 'react-router-dom';
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={s.btns}>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign up</Link>
    </div>
  );
};

export default AuthNav;
