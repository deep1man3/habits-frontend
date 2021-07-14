import React, { useState } from 'react';
import { Checkbox, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './TaskItem.styles';
import WithProgressionTaskIcon from '../../assets/WithProgressionTaskIcon';
import CommonTaskIcon from '../../assets/CommonTaskIcon';
import { Task } from '../../../types/tasks.types';
import DialogProgressDoneTask from '../../templates/Dashboard/DialogProgressDoneTask';

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
              {task.habit.type === 1 ? (
                <WithProgressionTaskIcon />
              ) : (
                <CommonTaskIcon />
              )}
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
