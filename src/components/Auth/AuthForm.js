import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  let er = false;
  let emaill = useRef("");
  let passwordl = useRef("");
  const [isLogin, setIsLogin] = useState(true);
  function switchHandler() {
    setIsLogin((prevState) => !prevState);
  }
  function submitHandler(e) {
    e.preventDefault();
    setIsLogin(true);
    let enterEmail = emaill.current.value;
    let enterPassword = passwordl.current.value;

    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD75n7Mrcm1q4ndl92CJNLqr61eLavjvhI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enterEmail,
            password: enterPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          er = res.ok;
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
          });
        }
      });
      setIsLogin(false);
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
          {!isLogin && (
            <button type="submit" className={classes.toggle}>
              submit
            </button>
          )}
          {isLogin && er && <p>Loading...</p>}
        </div>
      </form>
      <button type="button" className={classes.toggle} onClick={switchHandler}>
        {isLogin ? "Create new account" : "Login with existing account"}
      </button>
    </section>
  );
};

export default AuthForm;
