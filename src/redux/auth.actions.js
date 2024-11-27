import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type.actions";

// Action pour une connexion réussie
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

// Action pour un échec de connexion
export const loginFailed = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

// Action pour la déconnexion
export const logout = () => ({
  type: LOGOUT,
});
