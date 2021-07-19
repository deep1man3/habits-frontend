import React, { PropsWithChildren } from 'react';
import { Box, Grid } from '@material-ui/core';
import AppBar from '../../lowLevel/AppBar';
import { useStyles } from './Base.styles';
import Logo from '../../lowLevel/Logo';
import { useSelector } from '../../../store';
import AuthButtons from './AuthButtons';
import UserButtons from './UserButtons';

interface BaseTemplateProps {}

const BaseTemplate = ({ children }: PropsWithChildren<BaseTemplateProps>) => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <AppBar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>{!user ? <AuthButtons /> : <UserButtons />}</Grid>
        </Grid>
      </AppBar>
      <Box className={classes.main}>{children}</Box>
    </>
  );
};

export default BaseTemplate;
