import React, { PropsWithChildren, useEffect, useState } from 'react';
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
  const [drawerVariant, setDrawerVariant] = useState(variant);
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.meta.isDrawerOpen);

  useEffect(() => {
    if (isLarge) {
      setDrawerVariant('permanent');
    } else if (isNotMobile) {
      setDrawerVariant('persistent');
    } else {
      setDrawerVariant('temporary');
    }
  }, [isNotMobile, isLarge]);

  return (
    <MuiDrawer
      classes={{
        paper: classes.drawerContent,
      }}
      variant={drawerVariant}
      open={isDrawerOpen}
      onClose={() => dispatch(metaActions.toggleDrawerOpen())}
      {...rest}
    >
      {!isLarge && isNotMobile && <Toolbar />}
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
