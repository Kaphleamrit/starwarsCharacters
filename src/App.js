
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import People from "./components/People";

function App(props) {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/api/people" exact>
            <People style={{ display: "flex", alignSelf: "center" }} />
          </Route>
          <Route class= "text-muted" path="/" exact>
            <p>add <code>/api/people</code> in your URL</p>
          </Route>
          
        </Switch>
      </Router>
     </>
  );
}


export default App;
