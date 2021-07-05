import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import AppBar from '../../components/AppBar';
import { useStyles } from './Home.styles';

const Home: FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar />
      <Box className={classes.hero} height="calc(100vh - 56px)" />
    </>
  );
};

export default Home;
