import React from 'react';
import CentredPageTitle from '../../components/templates/Dashboard/CentredPageTitle';
import HabitsList from '../../components/templates/Dashboard/HabitsList';

const Tasks = () => (
  <>
    <CentredPageTitle>
      Задания на сегодня
    </CentredPageTitle>
    <HabitsList />
  </>
);

export default Tasks;
