import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";

import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login/Login";
import useToken from "../src/useToken";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
