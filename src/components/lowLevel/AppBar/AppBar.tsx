import React, { PropsWithChildren } from 'react';
import { Toolbar, AppBar as MuiAppBar, AppBarProps } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './AppBar.styles';

const AppBar = ({
  className,
  children,
  ...rest
}: PropsWithChildren<AppBarProps>) => {
  const classes = useStyles();

  return (
    <MuiAppBar
      className={clsx(classes.root, className)}
      position="static"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>{children}</Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
