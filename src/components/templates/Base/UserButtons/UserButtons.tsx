import React from 'react';
import { Box, Link as MuiLink } from '@material-ui/core';
import { Link } from '../../../../routing';
import AuthService from '../../../../utils/services/AuthService';

const UserButtons = () => {
  const handleLogout = () => {
    AuthService.processLogout();
  };

  return (
    <>
      <Box component="span" mr={2}>
        <Link to="/tasks" label="Перейти к панели управления" />
      </Box>
      <Box component="span">
        <MuiLink onClick={handleLogout} color="inherit">
          Выйти
        </MuiLink>
      </Box>
    </>
  );
};

export default UserButtons;
