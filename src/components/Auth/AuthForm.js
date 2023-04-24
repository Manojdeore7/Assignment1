import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
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
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD75n7Mrcm1q4ndl92CJNLqr61eLavjvhI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD75n7Mrcm1q4ndl92CJNLqr61eLavjvhI";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enterEmail,
        password: enterPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let mes = "AUTHENTICATION IS fAILED!";
          throw new Error(mes);
        }
      })
      .then((data) => {
        console.log(data.idToken);
      })
      .catch((er) => {
        alert(er.message);
      });
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
