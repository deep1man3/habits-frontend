import React, { PropsWithChildren } from 'react';
import { Divider, Grid, Hidden, Toolbar } from '@material-ui/core';
import Drawer from './Drawer';
import AppBar from '../../lowLevel/AppBar';
import Logo from '../../lowLevel/Logo';
import MenuList from './MenuList';
import ProfileBox from './ProfileBox';
import NewTaskButton from './NewTaskButton';
import MainContent from './MainContent';
import MenuIconButton from './MenuIconButton';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => (
  <div>
    <Hidden lgUp>
      <AppBar position="relative">
        <MenuIconButton />
      </AppBar>
    </Hidden>
    <Drawer>
      <Toolbar>
        <Grid container justify="center">
          <Logo />
        </Grid>
      </Toolbar>
      <Divider />
      <MenuList />
      <Divider />
      <ProfileBox />
    </Drawer>
    <MainContent>{children}</MainContent>
    <NewTaskButton />
  </div>
);

export default DashboardTemplate;
