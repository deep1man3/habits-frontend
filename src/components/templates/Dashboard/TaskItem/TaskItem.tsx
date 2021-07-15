import React, { useState } from 'react';
import { Checkbox, Grid, Paper, Typography } from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { useStyles } from './TaskItem.styles';

import { Task } from '../../../../types/tasks.types';
import DialogProgressDoneTask from '../DialogProgressDoneTask';

type TaskItemProps = Task;

const TaskItem = (task: TaskItemProps) => {
  const classes = useStyles();

  const [isDialogProgressDoneTask, setIsDialogProgressDoneTask] =
    useState<boolean>(false);
  const toggleDialogProgressDoneTask = () =>
    setIsDialogProgressDoneTask((prev) => !prev);

  return (
    <>
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
              {task.habit.type === 1 ? <ShowChartIcon /> : <TrendingFlatIcon />}
            </Grid>
            <Grid item container xs={12} md={9}>
              <Grid item className={classes.label}>
                <Typography variant="h4">{task.habit.name}</Typography>
              </Grid>
              <Grid item className={classes.description}>
                <Typography variant="body2">
                  {task.habit.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={1} justify="center">
              <Checkbox
                color="primary"
                checked={task.done}
                onChange={toggleDialogProgressDoneTask}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <DialogProgressDoneTask
        task={task}
        open={isDialogProgressDoneTask}
        handleClose={toggleDialogProgressDoneTask}
      />
    </>
  );
};

export default TaskItem;
