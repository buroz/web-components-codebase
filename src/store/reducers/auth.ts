import { AUTH_ACTION } from "../actions/auth";
import { AuthState } from "../../_interfaces";

export const INITIAL_STATE: AuthState = {
  hasError: false,
  token: localStorage.getItem("token") || ""
};

export const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH_ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        hasError: false,
        token: action.token
      };
    case AUTH_ACTION.LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error
      };
    case AUTH_ACTION.REGISTER_SUCCESS:
      return {
        ...state,
        hasError: false,
        token: action.token
      };
    case AUTH_ACTION.REGISTER_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error
      };
    case AUTH_ACTION.LOGOUT_SUCCESS:
      return {
        ...state,
        token: ""
      };
    case AUTH_ACTION.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordStatus: false
      };
    case AUTH_ACTION.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error
      };
    default:
      return state;
  }
};
