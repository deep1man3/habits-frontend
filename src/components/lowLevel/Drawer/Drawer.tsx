import React, { PropsWithChildren } from 'react';
import {
  Divider,
  Drawer as MuiDrawer,
  DrawerProps,
  Grid,
  Toolbar,
} from '@material-ui/core';
import { useStyle } from './Drawer.styles';
import Logo from '../Logo';

const Drawer = ({
  variant = 'permanent',
  open = true,
  children,
  ...rest
}: PropsWithChildren<DrawerProps>) => {
  const classes = useStyle();

  return (
    <MuiDrawer
      classes={{
        paper: classes.drawerContent,
      }}
      variant="permanent"
      open
      {...rest}
    >
      <Toolbar>
        <Grid container justify="center">
          <Logo />
        </Grid>
      </Toolbar>
      <Divider />

      {children}
    </MuiDrawer>
  );
};

export default Drawer;
