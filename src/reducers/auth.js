import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from '../actions/auth';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null,
  loggedIn: false
};

export default function authReducer(state=initialState, action) {
  switch(action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken
      };
    case CLEAR_AUTH:
      return {
        ...state,
        authToken: null,
        currentUser: null,
        loggedIn: false
      };
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currentUser: action.currentUser,
        loggedIn: true
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}