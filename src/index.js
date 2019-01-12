import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.3.0";
import LandingPage from "./views/LandingPage/LandingPage";

var hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  //   <Switch>
  //     {indexRoutes.map((prop, key) => {
  //       return <Route path={prop.path} key={key} component={prop.component} />;
  //     })}
  //   </Switch>
  // </Router>,
  <LandingPage></LandingPage>,
  document.getElementById("root")
);
