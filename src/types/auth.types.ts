export interface SignInData {
  data: SignInUserData;
  onError: () => void;
}

export interface SignInUserData {
  login: string;
  password: string;
}

export interface AuthState {
  user: UserData | null;
  authenticated: boolean;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
}
