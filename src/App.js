import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/Store/Auth-Context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;
  if (login) {
    setTimeout(() => {
      context.logout();
    }, 1000 * 60 * 5);
  }
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!login && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {login && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
