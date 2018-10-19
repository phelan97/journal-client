
import {MAX_RESULTS_PER_PAGE} from '../config';

export const SET_RESULTS_PER_PAGE = "SET_RESULTS_PER_PAGE";
export const setResultsPerPage = (resultsPerPage) => {
  if(resultsPerPage > MAX_RESULTS_PER_PAGE) {
    resultsPerPage = MAX_RESULTS_PER_PAGE;
  }
  return {
    type: SET_RESULTS_PER_PAGE,
    resultsPerPage
  }
}

export const SET_RESULT_COUNT = "SET_RESULT_COUNT";
export const setResultCount = (numResults) => ({
  type: NEXT_PAGE,
  numResults
});

export const NEXT_PAGE = "NEXT_PAGE";
export const nextPage = () => ({
  type: NEXT_PAGE
});

export const PREV_PAGE = "PREV_PAGE";
export const prevPage = () => ({
  type: PREV_PAGE
});

