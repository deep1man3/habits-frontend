import React, { PropsWithChildren } from 'react';
import { Grid, Button as MuiButton } from '@material-ui/core';
import { useStyles } from './Button.styles';

const Button = ({ children }: PropsWithChildren<any>) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <MuiButton
        type="submit"
        variant="outlined"
        color="primary"
        disableElevation
        fullWidth
        className={classes.button}
      >
        {children}
      </MuiButton>
    </Grid>
  );
};

export default Button;
