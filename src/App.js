import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/Store/Auth-Context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CompanyInfo from "./components/Profile/CompanyInfo";

function App() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;

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
            <CompanyInfo />
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
