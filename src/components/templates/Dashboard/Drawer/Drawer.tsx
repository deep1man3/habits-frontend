import React, { PropsWithChildren } from 'react';
import { Drawer as MuiDrawer, DrawerProps } from '@material-ui/core';
import { useStyles } from './Drawer.styles';

const Drawer = ({ children, ...rest }: PropsWithChildren<DrawerProps>) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      classes={{
        paper: classes.drawerContent,
      }}
      variant="permanent"
      open
      {...rest}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
