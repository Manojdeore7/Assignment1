import react, { useState } from "react";
let AuthContext = react.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  let [userLoggedIn, setToken] = useState(false);

  let loggedInHandeler = () => {
    setToken(true);
  };
  let loggedOutHandeler = () => {
    setToken(false);
  };

  let context = {
    isLoggedIn: userLoggedIn,
    login: loggedInHandeler,
    logout: loggedOutHandeler,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
