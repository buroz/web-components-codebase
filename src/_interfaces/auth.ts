export interface AuthState {
  hasError: boolean;
  error?: string;
  token?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordAgain: string;
}
