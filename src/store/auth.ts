import { LoginRequest, AuthState } from "../_interfaces";

export enum AUTH {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR"
}

export const INITIAL_STATE: AuthState = {
  hasError: false
};

export const loginRequestAction = (request: LoginRequest) => {
  console.log(request);
  /*
  return {
    type: AUTH.LOGIN_ERROR,
    error: "errorerrorerror"
  };
  */

  return {
    type: AUTH.LOGIN_SUCCESS,
    token: "tokentokentoken"
  };
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        hasError: false,
        token: action.token
      };
    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error
      };
    default:
      return state;
  }
};
