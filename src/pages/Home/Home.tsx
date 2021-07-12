import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Home.styles';

const Home = () => {
  const classes = useStyles();
  console.log('HomePage: re-render');

  return <Box className={classes.hero} />;
};

export default Home;
