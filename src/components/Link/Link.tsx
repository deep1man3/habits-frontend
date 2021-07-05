import React, { FC } from 'react';
import { Link as MuiLink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProperties {
  to: string;
  label: string;
}

const Link: FC<LinkProperties> = ({ to, label }) => (
  <MuiLink component={RouterLink} to={to} color="inherit">
    {label}
  </MuiLink>
);

export default Link;
