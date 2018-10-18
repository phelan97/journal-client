
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = "FETCH_PROTECTED_DATA_SUCCESS";
export const fetchProtectedDataSuccess = entries => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  entries
});

export const FETCH_PROTECTED_DATA_ERROR = "FETCH_PROTECTED_DATA_ERROR";
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});

export const DELETE_ENTRY_SUCCESS = "DELETE_ENTRY_SUCCESS";
export const deleteEntrySuccess = id => {
  console.log('delete with id', id);
  return {
    type: DELETE_ENTRY_SUCCESS,
    id
  }
};

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/entries`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => dispatch(fetchProtectedDataError(err)));
}

export const deleteEntry = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/entries/${id}`, {
    method: 'DELETE',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }
  })
  .then((res) => {
    dispatch(deleteEntrySuccess(id));
  })
  .catch(err => {
    console.log(err);
  })
}