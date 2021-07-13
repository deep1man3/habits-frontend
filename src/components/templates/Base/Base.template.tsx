import React, { PropsWithChildren } from 'react';
import { Box, Grid } from '@material-ui/core';
import AppBar from '../../lowLevel/AppBar';
import { useStyles } from './Base.styles';
import Logo from '../../lowLevel/Logo';
import { Link } from '../../../routing';

interface BaseTemplateProps {}

const BaseTemplate = ({ children }: PropsWithChildren<BaseTemplateProps>) => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
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
      </AppBar>
      <Box className={classes.main}>{children}</Box>
    </>
  );
};

export default BaseTemplate;
