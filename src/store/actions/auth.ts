import { LoginRequest, RegisterRequest } from "../../_interfaces";
import { api } from "../../utils";

export enum AUTH_ACTION {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_ERROR = "REGISTER_ERROR"
}

export const loginAction = async (request: LoginRequest) => {
  try {
    const res = await api({
      url: `/auth/login`,
      method: "POST",
      data: request
    });
    localStorage.SetItem("token", res.token);
    return {
      type: AUTH_ACTION.LOGIN_SUCCESS,
      token: res.token
    };
  } catch (err) {
    return {
      type: AUTH_ACTION.LOGIN_ERROR,
      error: err.message
    };
  }
};

export const registerAction = async (request: RegisterRequest) => {
  try {
    const res = await api({
      url: `/auth/register`,
      method: "POST",
      data: request
    });
    localStorage.SetItem("token", res.token);
    return {
      type: AUTH_ACTION.REGISTER_SUCCESS,
      token: res.token
    };
  } catch (err) {
    return {
      type: AUTH_ACTION.REGISTER_ERROR,
      error: err.message
    };
  }
};

export const logoutAction = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_ACTION.LOGOUT_SUCCESS
  };
};
