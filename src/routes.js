import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Summary from "./components/Summary/Summary";
import Page404 from "./components/Page404/Page404";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/summary" component={Summary} />
    <Route path="*" render={Page404} />
  </Switch>
);
