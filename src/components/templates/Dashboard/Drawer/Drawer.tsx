import React, { PropsWithChildren } from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './Drawer.styles';
import { useSelector } from '../../../../store';
import { metaActions } from '../../../../store/meta/slice';

const Drawer = ({
  variant = 'temporary',
  children,
  ...rest
}: PropsWithChildren<DrawerProps>) => {
  const classes = useStyles();
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.meta.isDrawerOpen);
  return (
    <MuiDrawer
      classes={{
        paper: classes.drawerContent,
      }}
      variant={isLarge ? 'permanent' : 'temporary'}
      open={isDrawerOpen}
      onClose={() => dispatch(metaActions.toggleDrawerOpen())}
      {...rest}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
