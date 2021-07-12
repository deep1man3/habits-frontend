import React, { PropsWithChildren } from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyle } from './Drawer.styles';
import { useSelector } from '../../../store';
import { metaActions } from '../../../store/meta/slice';
import Logo from '../Logo';

const Drawer = ({
  variant = 'permanent',
  open = true,
  children,
  ...rest
}: PropsWithChildren<DrawerProps>) => {
  const classes = useStyle();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('xl'));

  const dispatch = useDispatch();
  const { mobileOpen, desktopOpen } = useSelector((state) => state.meta);

  // TODO fix no-nested-ternary!
  return (
    <MuiDrawer
      classes={{
        paper: classes.drawerContent,
      }}
      variant={
        // eslint-disable-next-line no-nested-ternary
        isLarge ? 'permanent' : isNotMobile ? 'persistent' : 'temporary'
      }
      // eslint-disable-next-line no-nested-ternary
      open={isLarge ? true : isNotMobile ? desktopOpen : mobileOpen}
      onClose={() => dispatch(metaActions.toggleMobileMenu())}
      {...rest}
    >
      <Toolbar>
        <Logo />
      </Toolbar>
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
