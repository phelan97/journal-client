import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  DELETE_ENTRY_SUCCESS
} from '../actions/user-data';

const initialState = {
  entries: [],
  error: null,
  id: null
};

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROTECTED_DATA_SUCCESS:
     return {
       ...state,
        entries: action.entries,
        error: null
      };
    case FETCH_PROTECTED_DATA_ERROR:
      return {
        ...state,
        error: action.error
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.id)
      }
    default:
      return state;
  }
}
