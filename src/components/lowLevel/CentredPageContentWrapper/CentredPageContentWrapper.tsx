import React, { PropsWithChildren } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from './CentredPageContentWrapper.styles';

interface CentredPageContentProps {
  maxWidth?: number;
  boxShadow?: string;
}

const CentredPageContentWrapper = ({
  maxWidth = 480,
  boxShadow = 'none',
  children,
}: PropsWithChildren<CentredPageContentProps>) => {
  const classes = useStyles(maxWidth, boxShadow)();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      className={classes.root}
    >
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};

export default CentredPageContentWrapper;
