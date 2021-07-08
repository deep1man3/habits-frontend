export interface SignInData {
  data: {
    login: string;
    password: string;
  };
  onError: () => void;
}
