import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="*" render={() => <div>404 Error</div>} />
  </Switch>
);
