import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "./hero";
import Book from "./book";

const AppRoutes = props =>

  <Switch location={props.location}>
    <Route exact path="/" component={Hero}  />
    <Route exact path="/book" component={Book} />
  </Switch>

export default AppRoutes;
