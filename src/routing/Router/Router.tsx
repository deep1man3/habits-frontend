import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Template from '../../components/templates';

const Router = () => (
  <BrowserRouter>
    <Template>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign-in">
          <h1>sign-in</h1>
        </Route>
        <Route exact path="/sign-up">
          <h1>sign-up</h1>
        </Route>

        <Route>
          <h1>NO MATCH</h1>
        </Route>
      </Switch>
    </Template>
  </BrowserRouter>
);

export default Router;
