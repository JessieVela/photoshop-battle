import React from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardComments from "./components/CardComments";


function App() {
  return (
    <div className="App">
      <Router>
        {/* Commenting out to hide the errors in the console <Navigation /> */}
        <Switch>
          <Route path="/post/comments">
            <CardComments />
          </Route>
          <Route path="/Contact">
            <FAQ />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
