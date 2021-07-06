import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@material-ui/core';
import { useStyles } from './Link.styles';

interface LinkProperties {
  to: string;
  label: string;
}

const Link = ({ to, label }: LinkProperties) => {
  const classes = useStyles();

  return (
    <MuiLink
      className={classes.link}
      component={RouterLink}
      to={to}
      color="inherit"
    >
      {label}
    </MuiLink>
  );
};

export default Link;
