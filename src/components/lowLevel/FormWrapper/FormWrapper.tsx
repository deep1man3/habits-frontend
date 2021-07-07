import { Button, Grid, Paper } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { useStyles } from './FormWrapper.styles';

interface FormWrapperProps {
  buttonLabel?: string;
  maxWidth?: number;
  boxShadow?: string;
}

const FormWrapper = ({
  buttonLabel = 'Отправить',
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
      <Paper className={classes.form}>
        <Grid item container spacing={2}>
          {children}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              fullWidth
              className={classes.button}
            >
              {buttonLabel}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default FormWrapper;
