import react, { useState } from "react";
let AuthContext = react.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
});

export function AuthContextProvider(props) {
  let [Token, setToken] = useState(null);
  let userLoggedIn = !!Token;
  let loggedInHandeler = (token) => {
    setToken(token);
  };
  let loggedOutHandeler = () => {
    setToken(null);
  };

  let context = {
    token: Token,
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
