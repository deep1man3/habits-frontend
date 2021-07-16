import { AxiosPromise } from 'axios';
import $api from '../../api';
import { AuthResponseDTO } from '../../../types/DTO/AuthResponseDTO';
import store from '../../../store';
import { authActions } from '../../../store/auth/slice';

export default class AuthService {
  static async processLogin(
    login: string,
    password: string,
    onSuccess?: () => void,
    onFinally?: () => void
  ): Promise<void> {
    const response = await $api
      .post<AuthResponseDTO>('/auth/login', {
        login,
        password,
      })
      .finally(() => {
        onFinally && onFinally();
      });

    if (!response.data.user) throw new Error('Не прилетел пользователь!');
    if (!response.data.token) throw new Error('Не прилетел токен!');

    localStorage.setItem('habits:token', `${response.data.token}`);
    store.dispatch(authActions.setUser(response.data.user));
    onSuccess && onSuccess();
  }

  static async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosPromise<AuthResponseDTO>> {
    return $api.post<AuthResponseDTO>('/users/create', {
      name,
      email,
      password,
    });
  }
}
