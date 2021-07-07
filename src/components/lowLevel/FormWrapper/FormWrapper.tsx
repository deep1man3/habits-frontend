import { Grid, Paper } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { useStyles } from './FormWrapper.styles';

interface FormWrapperProps {
  maxWidth?: number;
  boxShadow?: string;
}

const FormWrapper = ({
  maxWidth = 480,
  boxShadow = 'none',
  children,
}: PropsWithChildren<FormWrapperProps>) => {
  const classes = useStyles(maxWidth, boxShadow)();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      className={classes.root}
    >
      <Paper className={classes.form}>{children}</Paper>
    </Grid>
  );
};

export default FormWrapper;
