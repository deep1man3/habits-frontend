import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseTemplate from '../../components/templates/Base';
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import DashboardTemplate from '../../components/templates/Dashboard';
import Dashboard from '../../pages/Dashboard';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard/:path?" exact>
        <DashboardTemplate>
          <Switch>
            <Route path="/dashboard" exact render={() => <Dashboard />} />
            <Route path="/*" exact render={() => <div>404</div>} />
          </Switch>
        </DashboardTemplate>
      </Route>
      <Route>
        <BaseTemplate>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/sign-in" exact render={() => <SignIn />} />
            <Route path="/sign-up" exact render={() => <SignUp />} />
            <Route path="/*" exact render={() => <div>404</div>} />
          </Switch>
        </BaseTemplate>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
