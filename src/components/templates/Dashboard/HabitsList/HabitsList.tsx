import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import HabitsService from '../../../../utils/services/HabitsService';
import { useSelector } from '../../../../store';
import HabitItem from '../HabitItem';

const HabitsList = () => {
  const { habits } = useSelector((state) => state.habits);

  useEffect(() => {
    if (localStorage.getItem('habits:token')) {
      HabitsService.getHabits();
    }
  }, []);

  if (!habits) {
    return (
      <Grid container justify="center">
        <Typography>Ваш список задач пуст!</Typography>
      </Grid>
    );
  }

  return (
    <Grid container justify="center">
      {habits &&
        habits.length > 0 &&
        habits.map((task) => <HabitItem key={task.id} {...task} />)}
    </Grid>
  );
};

export default HabitsList;
