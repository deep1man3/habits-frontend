import React, { PropsWithChildren } from 'react';
import { Box, Grid } from '@material-ui/core';
import AppBar from '../../lowLevel/AppBar';
import { useStyles } from './Base.styles';
import Logo from '../../lowLevel/Logo';
import { useSelector } from '../../../store';
import { Link } from '../../../routing';

interface BaseTemplateProps {}

const BaseTemplate = ({ children }: PropsWithChildren<BaseTemplateProps>) => {
  const classes = useStyles();

  console.log('BaseTemplate: re-render');

  const { user } = useSelector((state) => state.auth);

  // TODO create AppBarButtons
  return (
    <>
      <AppBar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            {!user && (
              <>
                <Box component="span" mr={2}>
                  <Link to="/sign-in" label="Войти" />
                </Box>
                <Box component="span">
                  <Link to="/sign-up" label="Зарегистрироваться" />
                </Box>
              </>
            )}
            {!!user && (
              <>
                <Box component="span" mr={2}>
                  <Link to="/dashboard" label="Панель управления" />
                </Box>
                <Box component="span">
                  <Link to="/logout" label="Выйти" />
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </AppBar>
      <Box className={classes.main}>{children}</Box>;
    </>
  );
};

export default BaseTemplate;
