import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import FormWrapper from '../../components/lowLevel/FormWrapper';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormWrapper>
        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="primary">
              Авторизация
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Ваш email"
              autoComplete="email"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Ваш пароль"
              autoComplete="password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              fullWidth
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </FormWrapper>
    </>
  );
};

export default SignIn;
