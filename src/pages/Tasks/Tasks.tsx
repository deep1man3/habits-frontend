import React from 'react';
import { Typography } from '@material-ui/core';
import CentredPageTitle from '../../components/lowLevel/CentredPageContent';
import HabitsList from '../../components/templates/Dashboard/HabitsList';

const Tasks = () => (
  <>
    <CentredPageTitle>
      <Typography variant="h4">Задания на сегодня</Typography>
    </CentredPageTitle>
    <HabitsList />
  </>
);

export default Tasks;
