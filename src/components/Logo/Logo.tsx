import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './Logo.styles';

const Logo: FC = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.root}>
      Habits
    </Typography>
  );
};

export default Logo;
