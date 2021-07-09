import { User } from '../auth.types';

export interface AuthResponseDTO {
  token: string;
  user: User;
}
