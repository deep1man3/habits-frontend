import { Box } from '@material-ui/core';
import React from 'react';
import CentredPageContentWrapper from '../../../components/lowLevel/CentredPageContentWrapper';
import NewTaskForm from '../../../components/templates/Dashboard/NewTaskForm';

const TaskAdd = () => (
  <Box marginTop="56px">
    <CentredPageContentWrapper maxWidth={800} boxShadow="">
      <NewTaskForm />
    </CentredPageContentWrapper>
  </Box>
);

export default TaskAdd;
