import React, { PropsWithChildren } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './MainContent.styles';

const MainContent = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};

export default MainContent;
