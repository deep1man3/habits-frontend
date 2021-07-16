import React, { PropsWithChildren } from 'react';
import { Divider, Grid, Hidden, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import Drawer from './Drawer';
import AppBar from '../../lowLevel/AppBar';
import { metaActions } from '../../../store/meta/slice';
import Logo from '../../lowLevel/Logo';
import MenuList from './MenuList';
import ProfileBox from './ProfileBox';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Hidden lgUp>
        <AppBar position="relative">
          <IconButton
            color="inherit"
            onClick={() => dispatch(metaActions.toggleDrawerOpen())}
          >
            <MenuIcon />
          </IconButton>
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
      {children}
    </div>
  );
};

export default DashboardTemplate;
