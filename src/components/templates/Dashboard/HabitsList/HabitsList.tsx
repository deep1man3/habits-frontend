import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from '../../../../store';
import HabitItem from '../HabitItem';

const HabitsList = () => {
  const { habits, habitsIdCompletedToday } = useSelector(
    (state) => state.habits
  );

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
        habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            isDone={habitsIdCompletedToday.includes(habit.id)}
          />
        ))}
    </Grid>
  );
};

export default HabitsList;
