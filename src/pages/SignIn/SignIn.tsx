import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { SignInUserDirtyFormData } from '../../types/auth.types';
import CentredPageContentWrapper from '../../components/lowLevel/CentredPageContentWrapper/CentredPageContentWrapper';
import AuthService from '../../utils/services';
import SubmitFormButton from '../../components/lowLevel/SubmitFormButton';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm();
  const history = useHistory();

  const handleSignIn: SubmitHandler<SignInUserDirtyFormData> = ({
    login,
    password,
  }) => {
    setIsLoading(true);

    AuthService.processLogin(
      login,
      password,
      () => {
        history.push('/tasks');
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  return (
    <CentredPageContentWrapper>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="primary">
              Авторизация
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue="john.doe@habits.foo"
              name="login"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="email"
                  label="Ваш email"
                  autoComplete="email"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue="1q2w3e4r"
              name="password"
              render={({ field }) => (
                <TextField
                  {...field}
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
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <SubmitFormButton disabled={isLoading}>Войти</SubmitFormButton>
          </Grid>
        </Grid>
      </form>
    </CentredPageContentWrapper>
  );
};

export default SignIn;
