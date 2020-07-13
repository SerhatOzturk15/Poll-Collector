import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  QuestionListContainer,
  QuestionDetailsContainer,
  QuestionCreateContainer,
} from "./containers";
import { AppBar, Error } from "./components";
import { useSelector } from "react-redux";

const AppContainer = () => {
  const { error } = useSelector((store) => store);
  return (
    <section className="App">
      <AppBar title="Poll Collection" />
      {error ? (
        <Error text = 'Application has not been working properly. Please check your internet connection' />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={QuestionListContainer} />
            <Route
              exact
              path="/questions/:id"
              component={QuestionDetailsContainer}
            />
            <Route exact path="/create" component={QuestionCreateContainer} />
          </Switch>
        </Router>
      )}
    </section>
  );
};

export default AppContainer;
