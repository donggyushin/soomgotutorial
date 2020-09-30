import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavigationComponent from "../components/Navigation";
import PageA from "../Screens/PageA";
import PageB from "../Screens/PageB";
import React from "react";

const RouteComponent = () => (
  <Router>
    <div style={{ width: "100%" }}>
      <NavigationComponent />
    </div>
    <Switch>
      <Route path="/A">
        <PageA />
      </Route>
      <Route path="/B">
        <PageB />
      </Route>
      <Route>
        <PageA />
      </Route>
    </Switch>
  </Router>
);

export default RouteComponent;
