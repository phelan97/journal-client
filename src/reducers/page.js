
import {
  SET_RESULTS_PER_PAGE,
  SET_RESULT_COUNT,
  NEXT_PAGE,
  PREV_PAGE,
} from '../actions/page';

const initialState = {
  resultsPerPage: 15,
  currentPage: 0,
  numResults: 0
};

export default function pageReducer(state=initialState, action) {
  switch(action.type) {
    case SET_RESULTS_PER_PAGE:
      return {
        ...state,
        resultsPerPage: action.resultsPerPage
      }
    case SET_RESULT_COUNT:
      return {
        ...state,
        numResults: action.numResults
      }
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case PREV_PAGE:
      let newPage = state.currentPage - 1;
      newPage = newPage < 0 ? 0 : newPage;
      return {
        ...state,
        currentPage: newPage
      }
    default:
      return state;
  }
}