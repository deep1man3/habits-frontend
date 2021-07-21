import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from '../../../../routing';

const AuthButtons = () => (
  <>
    <Box component="span" mr={2}>
      <Link to="/sign-in" label="Войти" />
    </Box>
    <Box component="span">
      <Link to="/sign-up" label="Зарегистрироваться" />
    </Box>
  </>
);

export default AuthButtons;
