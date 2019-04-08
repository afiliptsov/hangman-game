import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Game} />
    <Route path="*" render={() => <div>404 Error</div>} />
  </Switch>
);
