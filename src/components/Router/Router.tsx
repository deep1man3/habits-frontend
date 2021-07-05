import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Home from '../../pages/Home';

const Router: FC = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
