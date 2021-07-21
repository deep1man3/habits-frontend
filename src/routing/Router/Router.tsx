import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseTemplate from '../../components/templates/Base';
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import Tasks from '../../pages/Tasks';
import DashboardTemplate from '../../components/templates/Dashboard';
import TasksList from '../../pages/Tasks/TaskList';
import TaskAdd from '../../pages/Tasks/TaskAdd';

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
      <Route exact path="/tasks">
        <DashboardTemplate>
          <Tasks />
        </DashboardTemplate>
      </Route>
      <Route exact path="/tasks-list">
        <DashboardTemplate>
          <TasksList />
        </DashboardTemplate>
      </Route>
      <Route exact path="/add-task">
        <DashboardTemplate>
          <TaskAdd />
        </DashboardTemplate>
      </Route>

      <Route>
        <h1>NO MATCH</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
