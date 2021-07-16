import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import HabitsService from '../../../../utils/services/HabitsService';
import { useSelector } from '../../../../store';
import CentredPageContent from '../../../lowLevel/CentredPageContent';
import HabitItem from '../HabitItem';

const HabitsList = () => {
  const { habits } = useSelector((state) => state.habits);

  useEffect(() => {
    HabitsService.getHabits();
  }, []);

  if (!habits) {
    return (
      <CentredPageContent>
        <Typography>Ваш список задач пуст!</Typography>
      </CentredPageContent>
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
