import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostComments from "./components/PostComments";
import NoMatch from "./components/NoMatch";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Contact"></Route>
          <Route path="/FAQ"></Route>
          <Route path="/comments/:id" component={PostComments}></Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
