import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";

import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login/Login";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />

          <Route path="/dashboard" component={Dashboard} />

          <Route path="/preferences" component={Preferences} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
