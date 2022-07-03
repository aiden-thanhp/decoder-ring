import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";

// This is the main App that render the Layout

function App() {
  return (
    <div className="App">
      <div className="app-routes">
      <Switch>
        <Route>
          <Layout />
        </Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;
