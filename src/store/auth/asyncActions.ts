import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../utils/services';
import { SignInData } from '../../types/auth.types';

export const signin = createAsyncThunk(
  'auth/sign-in',
  async ({ data: { login, password }, onError }: SignInData) => {
    try {
      const response = await AuthService.login(login, password);
      console.log(response.data);
    } catch (e) {
      console.log('sign-in error: ', e);
      onError();
    }
  }
);
