import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./constants";
import Register from "./containers/Register";
import Questions from "./containers/Questions";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={Register} />
          <Route exact path={routes.QUESTIONS} component={Questions} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
