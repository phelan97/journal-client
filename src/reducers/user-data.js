import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR
} from '../actions/user-data';

const initialState = {
  entries: [],
  error: null
};

export default function userDataReducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
     return {
       ...state,
        entries: action.entries,
        error: null
      };
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
      return {
        ...state,
        error: action.error
      };
  }
  return state;
}
