import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "views/Login";
import { Market } from "views/Market";
import { Register } from "views/Register";
import { ROUTES } from "constants/ROUTES";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.REGISTER}>
          <Register />
        </Route>
        <Route path={ROUTES.MARKET}>
          <Market />
        </Route>
      </Switch>
    </Router>
  );
};
