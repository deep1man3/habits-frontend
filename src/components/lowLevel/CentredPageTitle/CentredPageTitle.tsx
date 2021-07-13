import React, { PropsWithChildren } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './CentredPageTitle.styles';

const CentredPageTitle = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Typography
        display="initial"
        variant="h4"
        className={classes.typographyTitle}
      >
        {children}
      </Typography>
    </Grid>
  );
};

export default CentredPageTitle;
