import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import FormWrapper from '../../components/lowLevel/FormWrapper';
import Button from '../../components/lowLevel/Button';
import { SignInUserData } from '../../types/auth.types';
import { signin } from '../../store/auth/asyncActions';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleSignIn: SubmitHandler<SignInUserData> = (data) => {
    setIsLoading(true);
    dispatch(signin({ data, onError: () => setIsLoading(false) }));
  };

  return (
    <>
      <FormWrapper>
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
                    // eslint-disable-next-line
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
                    // eslint-disable-next-line
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
            <Button loading={isLoading}>Войти</Button>
          </Grid>
        </form>
      </FormWrapper>
    </>
  );
};

export default SignIn;
