import React from 'react';
import AchievementTable from '../../../components/templates/Dashboard/AchievementTable';
import CentredPageTitle from '../../../components/templates/Dashboard/CentredPageTitle';

const TasksList = () => (
  <>
    <CentredPageTitle>Ваши успехи</CentredPageTitle>
    <AchievementTable />
  </>
);

export default TasksList;
