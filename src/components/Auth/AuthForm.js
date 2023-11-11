import { useState, useRef } from "react";
import AuthContext from "../Store/Auth-Context";
import { useContext } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  let context = useContext(AuthContext);
  let emaill = useRef("");
  let passwordl = useRef("");
  const [isLogin, setIsLogin] = useState(true);
  function switchHandler() {
    setIsLogin((prevState) => !prevState);
  }
  function submitHandler(e) {
    e.preventDefault();

    let enterEmail = emaill.current.value;
    let enterPassword = passwordl.current.value;

    if (isLogin) {
      let data = JSON.parse(localStorage.getItem("Data")) || [];
      let res = data.filter((e) => {
        return e.email === enterEmail && e.password === enterPassword;
      });
      if (res.length > 0) {
        context.login();
      } else {
        alert("This user is not exist!!!");
      }
    } else {
      let data = JSON.parse(localStorage.getItem("Data")) || [];
      data.push({
        email: enterEmail,
        password: enterPassword,
      });
      localStorage.setItem("Data", JSON.stringify(data));
      context.login();
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emaill} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordl} />
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.toggle}>
            submit
          </button>
        </div>
      </form>
      <button type="button" className={classes.toggle} onClick={switchHandler}>
        {isLogin ? "Create new account" : "Login with existing account"}
      </button>
    </section>
  );
};

export default AuthForm;
