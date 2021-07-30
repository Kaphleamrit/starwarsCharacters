
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import People from "./components/People";

function App(props) {

  return (
    <>
      <BrowserRouter>
        <Switch>
           <Route class= "text-muted" path="/" exact>
            <p>add <code>/api/people</code> in your URL</p>
          </Route>
          <Route path="/api/people" exact>
            <People style={{ display: "flex", alignSelf: "center" }} />
          </Route>
         
          
        </Switch>
      </BrowserRouter>
     </>
  );
}


export default App;
