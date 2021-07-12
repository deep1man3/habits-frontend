import React, { PropsWithChildren } from 'react';
import { Box } from '@material-ui/core';
import AppBar from '../../lowLevel/AppBar';
import { useStyles } from './Base.styles';

interface BaseTemplateProps {}

const BaseTemplate = ({ children }: PropsWithChildren<BaseTemplateProps>) => {
  const classes = useStyles();

  return (
    <>
      <AppBar />
      <Box className={classes.main}>{children}</Box>
    </>
  );
};

export default BaseTemplate;
