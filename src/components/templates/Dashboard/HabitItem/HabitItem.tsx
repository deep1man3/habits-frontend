import React, { useState } from 'react';
import { Checkbox, Grid, Paper, Typography } from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { useStyles } from './HabitItem.styles';
import DialogProgressDoneTask from '../DialogProgressDoneTask';
import { Habit } from '../../../../types/habits.types';

interface HabitItemProps {
  habit: Habit;
  isDone: boolean;
}

const HabitItem = ({ habit, isDone }: HabitItemProps) => {
  const classes = useStyles(isDone)();

  const [isDialogProgressDoneTask, setIsDialogProgressDoneTask] =
    useState<boolean>(false);
  const toggleDialogProgressDoneTask = () =>
    setIsDialogProgressDoneTask((prev) => !prev);

  return (
    <Grid item className={classes.root}>
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
              xs={12}
              md={2}
            >
              {habit.type === 1 ? (
                <ShowChartIcon className={classes.icon} />
              ) : (
                <TrendingFlatIcon className={classes.icon} />
              )}
            </Grid>
            <Grid item container xs={12} md={9}>
              <Grid item className={classes.label}>
                <Typography variant="h4">{habit.name}</Typography>
              </Grid>
              <Grid item className={classes.description}>
                <Typography variant="body2">{habit.description}</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={1} justify="center">
              <Checkbox
                color="primary"
                checked={isDone}
                disabled={isDone}
                onChange={toggleDialogProgressDoneTask}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {!isDone && (
        <DialogProgressDoneTask
          habit={habit}
          open={isDialogProgressDoneTask}
          handleClose={toggleDialogProgressDoneTask}
        />
      )}
    </Grid>
  );
};

export default HabitItem;
