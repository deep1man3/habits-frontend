import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import { useStyles } from './SubmitFormButton.styles';

const SubmitFormButton = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const classes = useStyles();

  return (
    <MuiButton
      className={clsx(classes.button, className)}
      color="primary"
      disableElevation
      type="submit"
      fullWidth
      variant="outlined"
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default SubmitFormButton;
