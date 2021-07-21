import React from 'react';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './NewTaskButton.styles';

const NewTaskButton = () => {
  const classes = useStyles();

  return (
    <Link to="/add-task">
      <Fab color="primary" className={classes.root}>
        <AddIcon />
      </Fab>
    </Link>
  );
};

export default NewTaskButton;
