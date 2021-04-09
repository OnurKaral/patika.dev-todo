import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";

import Dashboard from "./screens/Dashboard";
import Preferences from "./screens/Preferences";
import Login from "./components/Login/Login";
import Layout from "./components/Layout";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Route
          render={(props) => (
            <Layout
              {...props}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Switch>
                <Route path="/" exact component={Login} />

                <Route path="/dashboard" component={Dashboard} />

                <Route path="/preferences" component={Preferences} />
              </Switch>
            </Layout>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
