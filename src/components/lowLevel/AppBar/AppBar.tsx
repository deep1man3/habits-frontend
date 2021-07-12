import React, { PropsWithChildren } from 'react';
import {
  Toolbar,
  AppBar as MuiAppBar,
  Grid,
  Box,
  AppBarProps,
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './AppBar.styles';
import { Link } from '../../../routing';
import Logo from '../Logo';

const AppBar = ({
  className,
  children,
  ...rest
}: PropsWithChildren<AppBarProps>) => {
  const classes = useStyles();

  return (
    <MuiAppBar
      className={clsx(classes.root, className)}
      position="static"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            {children}
            <Box component="span" mr={2}>
              <Link to="/sign-in" label="Войти" />
            </Box>
            <Box component="span">
              <Link to="/sign-up" label="Зарегистрироваться" />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
