import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from '../../../../store';
import HabitItem from '../HabitItem';

const HabitsList = () => {
  const [idCompletedHabits, setIdCompletedHabits] = useState<Array<number>>([]);
  const { habits } = useSelector((state) => state.habits);
  const { tasks } = useSelector((state) => state.tasks);

  const isToday = (someDate: string) => {
    const taskDate = new Date(someDate?.split('T')[0]);
    const today = new Date();
    return (
      taskDate.getDate() === today.getDate() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getFullYear() === today.getFullYear()
    );
  };

  useEffect(() => {
    setIdCompletedHabits(
      tasks?.reduce((result: number[], task) => {
        if (isToday(task.completeDate)) {
          result.push(task.habit.id);
        }
        return result;
      }, []) || []
    );
  }, [tasks]);

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
            isDone={idCompletedHabits.includes(habit.id)}
          />
        ))}
    </Grid>
  );
};

export default HabitsList;
