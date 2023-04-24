import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../Store/Auth-Context";

const ProfileForm = () => {
  let cxt = useContext(AuthContext);
  let newPasswordRef = useRef("");
  let submitHandler = (e) => {
    e.preventDefault();
    let pass = newPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD75n7Mrcm1q4ndl92CJNLqr61eLavjvhI",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: cxt.token,
          password: pass,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
