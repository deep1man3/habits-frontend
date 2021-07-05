import React, { FC } from 'react';
import { Toolbar, AppBar as MuiAppBar, Grid, Box } from '@material-ui/core';
import { useStyles } from './AppBar.styles';
import Link from '../Link';
import Logo from '../Logo';

const AppBar: FC = () => {
  const classes = useStyles();

  return (
    <MuiAppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
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
