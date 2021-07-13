import React, { PropsWithChildren } from 'react';
import { Divider, Grid, Toolbar } from '@material-ui/core';
import Drawer from './Drawer';
import MenuList from './MenuList';
import Logo from '../../lowLevel/Logo';
import ProfileBox from './ProfileBox';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => (
  <div>
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
    {children}
  </div>
);

export default DashboardTemplate;
