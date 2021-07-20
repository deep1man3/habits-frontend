import React, { PropsWithChildren, useEffect } from 'react';
import DashboardTemplate from './Dashboard.template';
import HabitService from '../../../utils/services/HabitService/HabitService';
import TaskService from '../../../utils/services/TaskService';

const DashboardContainer = ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => {
    // Получения tasks пользователя
    TaskService.getTasks();
    // Получения habits пользователя
    HabitService.getHabits();
  }, []);

  return <DashboardTemplate>{children}</DashboardTemplate>;
};

export default DashboardContainer;
