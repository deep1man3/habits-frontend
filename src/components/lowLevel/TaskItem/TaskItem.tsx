import React from 'react';
import { Checkbox, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './TaskItem.styles';
import WithProgressionTaskIcon from '../../assets/WithProgressionTaskIcon';

const TaskItem = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Paper className={classes.paper}>
        <Grid
          container
          justify="flex-start"
          spacing={1}
          alignItems="center"
          className={classes.task}
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.img}
            xs={12}
            md={2}
          >
            <WithProgressionTaskIcon />
          </Grid>
          <Grid item container xs={12} md={9}>
            <Grid item>
              <Typography variant="h4" className={classes.label}>
                Lorem ipsum
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" component="p">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={1} justify="center">
            <Checkbox defaultChecked color="primary" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TaskItem;
