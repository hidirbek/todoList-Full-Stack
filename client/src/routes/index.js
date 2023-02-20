import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const index = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default index;
