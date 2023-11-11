import react, { useEffect, useState } from "react";
let AuthContext = react.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  let [userLoggedIn, setToken] = useState(false);

  useEffect(async () => {
    await fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      body: JSON.stringify({
        category: "movies",
        language: "kannad",
        genre: "all",
        sort: "voting",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

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
