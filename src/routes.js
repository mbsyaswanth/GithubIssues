import { Route, Switch } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Issue from "./components/Issue";
import Comments from "./components/Comments";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/issue/:issue">
        <Issue />
      </Route>
      <Route path="/:username/:repository/:issue">
        <Comments />
      </Route>
      <Route path="*">
        <div>No match</div>
      </Route>
    </Switch>
  );
};

export default Routes;
