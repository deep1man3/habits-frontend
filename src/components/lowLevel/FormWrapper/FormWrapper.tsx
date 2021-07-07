import { Paper } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { useStyles } from './FormWrapper.styles';

interface FormWrapperProps {}

const FormWrapper = ({ children }: PropsWithChildren<FormWrapperProps>) => {
  const classes = useStyles(480)();

  return <Paper className={classes.form}>{children}</Paper>;
};

export default FormWrapper;
