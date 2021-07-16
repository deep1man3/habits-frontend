import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseTemplate from '../../components/templates/Base';
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <BaseTemplate>
          <Home />
        </BaseTemplate>
      </Route>
      <Route exact path="/sign-in">
        <BaseTemplate>
          <SignIn />
        </BaseTemplate>
      </Route>
      <Route exact path="/sign-up">
        <BaseTemplate>
          <SignUp />
        </BaseTemplate>
      </Route>

      <Route>
        <h1>NO MATCH</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
