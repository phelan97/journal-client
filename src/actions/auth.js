import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const setAuthToken = (authToken) => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const CLEAR_AUTH = "CLEAR_AUTH";
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = "AUTH_REQUEST";
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = (currentUser) => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = "AUTH_ERROR";
export const authError = (error) => ({
  type: AUTH_ERROR,
  error
});

// TODO: currently no automatic logout
export const SHOW_LOGOUT_WARNING = "DISPLAY_LOGOUT_WARNING";
export const showLogoutWarning = (logoutWarningVisible) => ({
  type: SHOW_LOGOUT_WARNING,
  logoutWarningVisible
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken)
}

export const login = (email, password) => dispatch => {
  dispatch(authRequest)
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const {code} = err;
      const message =
          code === 401
              ? 'Incorrect username or password'
              : 'Unable to log in. Please try again';
      dispatch(authError(err));

      // TODO: return error with Promise.reject
    })
  );
};

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const REGISTER_ERROR = "REGISTER_ERROR";
export const registerError = (err) => ({
  type: REGISTER_ERROR,
  err
})

export const register = (email, password, firstName, lastName) => dispatch => {
  //dispatch(registerRequest);
  return (
    fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            firstName,
            lastName
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(registerSuccess()))
    .catch(err => {
      // TODO: say that an account couldn't be made. Provide a condition
      // (email already in use, try again; passwords should match at this point already)
      dispatch(registerError(err));

      // TODO: return error with Promise.reject
    })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .catch(err => {
    // Clear the old auth token if refreshing doesn't work
    dispatch(authError(err));
    dispatch(clearAuth());
    clearAuthToken(authToken);
  })
}