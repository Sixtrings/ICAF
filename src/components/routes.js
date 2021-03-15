import React from "react";
import { Route, Switch } from "react-router-dom";
import Hero from "./hero";
import Book from "./book/book";
import ChapterOne from './book/chapterone';

const AppRoutes = props =>

  <Switch location={props.location}>
    <Route exact path="/" component={Hero}  />
    <Route exact path="/book" component={Book} />
    <Route exact path="/book/chapter1" component={ChapterOne} />
  </Switch>

export default AppRoutes;
