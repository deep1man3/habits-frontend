import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Home.styles';

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero} height="calc(100vh - 56px)" />
    </>
  );
};

export default Home;
