import React, { FC } from 'react';
import { Toolbar, Typography, AppBar as MuiAppBar } from '@material-ui/core';

const AppBar: FC = () => (
  <MuiAppBar position="static">
    <Toolbar>
      <Typography variant="h6">Habits</Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
