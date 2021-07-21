import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './ProfileBox.styles';
import { useSelector } from '../../../../store';

const ProfileBox = () => {
  const classes = useStyles();

  const { user } = useSelector((state) => state.auth);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h5">{user?.name}</Typography>
    </Grid>
  );
};

export default ProfileBox;
