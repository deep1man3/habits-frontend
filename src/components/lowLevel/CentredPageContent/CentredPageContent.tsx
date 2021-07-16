import React, { PropsWithChildren } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './CentredPageContent.styles';

const CentredPageContent = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      {children}
    </Grid>
  );
};

export default CentredPageContent;
