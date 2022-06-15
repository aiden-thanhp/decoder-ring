import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";

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
