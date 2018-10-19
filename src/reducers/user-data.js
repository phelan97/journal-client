import {
  SET_SEARCH_FILTER,
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  DELETE_ENTRY_SUCCESS,
  UPDATE_ENTRY_SUCCESS,
  ADD_ENTRY_SUCCESS,
  SET_EDITING
} from '../actions/user-data';

const initialState = {
  entries: [],
  error: null,
  id: null
};

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: action.searchFilter
      }
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
    case ADD_ENTRY_SUCCESS:
      return {
        ...state,
        entries: [...state.entries, action.entry]
      }
    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        entries: state.entries.map(entry => {
          if(entry.id === action.updatedEntry.id) {
            return action.updatedEntry;
          }
          return entry;
        })
      }
    case SET_EDITING:
      return {
        ...state,
        editId: action.editId
      }
    default:
      return state;
  }
}
