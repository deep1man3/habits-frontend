import React, { PropsWithChildren } from 'react';
import { Divider, Grid, Hidden, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import Drawer from './Drawer';
import MenuList from './MenuList';
import Logo from '../../lowLevel/Logo';
import ProfileBox from './ProfileBox';
import AppBar from '../../lowLevel/AppBar';
import { metaActions } from '../../../store/meta/slice';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Hidden mdUp>
        <AppBar>
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
