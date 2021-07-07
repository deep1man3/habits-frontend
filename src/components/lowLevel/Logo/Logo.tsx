import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './Logo.styles';

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.root}>
      <Typography variant="h6">Habits</Typography>
    </Link>
  );
};

export default Logo;
