import React, { PropsWithChildren } from 'react';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AppBar from '../../lowLevel/AppBar';
import { useStyles } from './Base.styles';

interface BaseTemplateProps {}

const BaseTemplate = ({ children }: PropsWithChildren<BaseTemplateProps>) => {
  const classes = useStyles();

  console.log('BaseTemplate: re-render');

  return (
    <>
      <AppBar>
        <Button component={Link} to="/dashboard" variant="contained">
          Панель управления
        </Button>
      </AppBar>
      <Box className={classes.main}>{children}</Box>
    </>
  );
};

export default BaseTemplate;
