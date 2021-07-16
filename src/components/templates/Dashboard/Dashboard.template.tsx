import React, { PropsWithChildren } from 'react';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import Drawer from './Drawer';
import AppBar from '../../lowLevel/AppBar';
import { metaActions } from '../../../store/meta/slice';

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
      <Drawer>1</Drawer>
      {children}
    </div>
  );
};

export default DashboardTemplate;
