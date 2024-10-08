import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
