import React, { PropsWithChildren } from 'react';
import { Grid, Button as MuiButton } from '@material-ui/core';
import { useStyles } from './Button.styles';

interface ButtonProps {
  loading?: boolean;
}

const Button = ({
  loading = false,
  children,
}: PropsWithChildren<ButtonProps>) => {
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
        disabled={loading}
      >
        {loading ? 'Загрузка...' : children}
      </MuiButton>
    </Grid>
  );
};

export default Button;
