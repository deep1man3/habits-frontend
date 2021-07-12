import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseTemplate from '../../components/templates/Base';
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import DashboardTemplate from '../../components/templates/Dashboard';
import Dashboard from '../../pages/Dashboard';
import SmartRoute from '../SmartRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard/:path?" exact>
        <DashboardTemplate>
          <Switch>
            <SmartRoute path="/dashboard" exact page={Dashboard} privacyType />
            <Route path="/*" exact render={() => <div>404</div>} />
          </Switch>
        </DashboardTemplate>
      </Route>
      <Route>
        <BaseTemplate>
          <Switch>
            <SmartRoute path="/" exact page={Home} />
            <SmartRoute path="/sign-in" exact page={SignIn} />
            <SmartRoute path="/sign-up" exact page={SignUp} />
            <Route path="/*" exact render={() => <div>404</div>} />
          </Switch>
        </BaseTemplate>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
