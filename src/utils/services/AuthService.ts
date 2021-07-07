import { AxiosPromise } from 'axios';
import { AuthResponse } from '../../types/response/AuthResponse';
import $api from '../api';

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosPromise<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', { login, password });
  }
}
