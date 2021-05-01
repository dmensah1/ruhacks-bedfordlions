import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { UserProvider } from "./contexts/UserProvider";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
