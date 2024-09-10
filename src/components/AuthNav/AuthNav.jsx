import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={s.btns}>
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
};

export default AuthNav;
