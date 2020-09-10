import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostComments from "./components/PostComments";
import NoMatch from "./components/NoMatch";
import FAQ from "./components/FAQ";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/comments/:id" component={PostComments}></Route>
          <Route path="/Contact"></Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </>
  );
}
