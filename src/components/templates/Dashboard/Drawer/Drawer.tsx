import React, { PropsWithChildren } from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './Drawer.styles';
import { useSelector } from '../../../../store';
import { metaActions } from '../../../../store/meta/slice';

const Drawer = ({ children, ...rest }: PropsWithChildren<DrawerProps>) => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('xl'));

  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.meta.isDrawerOpen);

  return (
    <MuiDrawer
      classes={{
        paper: classes.drawerContent,
      }}
      variant={isNotMobile ? 'persistent' : 'temporary'}
      open={isLarge ? true : isDrawerOpen}
      onClose={() => dispatch(metaActions.toggleDrawerOpen())}
      {...rest}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
