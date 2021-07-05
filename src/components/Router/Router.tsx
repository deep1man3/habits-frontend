import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <p>Главная страница</p>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
