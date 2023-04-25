import { Link } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  let context = useContext(AuthContext);
  let tok = localStorage.getItem("Token") || null;
  context.login(tok);
  let login = context.isLoggedIn;
  function ram() {
    context.logout();
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!login && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {login && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {login && (
            <li>
              <Link to="/auth">
                <button onClick={ram}>Logout</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
