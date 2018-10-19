
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

export const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
export const setSearchFilter = searchFilter => ({
  type: SET_SEARCH_FILTER,
  searchFilter
})

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    let reqUrl = `${API_BASE_URL}/entries`;
    const filter = getState().data.searchFilter;
    if(filter) {
      reqUrl += ('?filter=' + filter);
    }
    return fetch(reqUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => dispatch(fetchProtectedDataError(err)));
}

export const DELETE_ENTRY_SUCCESS = "DELETE_ENTRY_SUCCESS";
export const deleteEntrySuccess = id => ({
  type: DELETE_ENTRY_SUCCESS,
  id
});

export const deleteEntry = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/entries/${id}`, {
    method: 'DELETE',
    headers: {
        Authorization: `Bearer ${authToken}`
    }
  })
  .then((res) => {
    dispatch(deleteEntrySuccess(id));
  })
  .catch(err => {
    // FIXME:
    console.log(err);
  })
}

export const UPDATE_ENTRY_SUCCESS = "UPDATE_ENTRY_SUCCESS";
export const updateEntrySuccess = updatedEntry => ({
  type: UPDATE_ENTRY_SUCCESS,
  updatedEntry
});

export const UPDATE_ENTRY_ERROR = "UPDATE_ENTRY_ERROR";
export const updateEntryError = error => ({
  type: UPDATE_ENTRY_ERROR,
  error
})

export const updateEntry = (id, newData) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/entries/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => dispatch(updateEntrySuccess(data)))
  .catch(err => dispatch(updateEntryError(err)));
};

export const ADD_ENTRY_SUCCESS = "ADD_ENTRY_SUCCESS";
export const addEntrySuccess = entry => ({
  type: ADD_ENTRY_SUCCESS,
  entry
});

export const ADD_ENTRY_ERROR = "ADD_ENTRY_ERROR";
export const addEntryError = error => ({
  type: ADD_ENTRY_ERROR,
  error
});

export const addEntry = (data) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/entries`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => dispatch(addEntrySuccess(data)))
  .catch(err => dispatch(addEntryError(err)));
};

export const SET_EDITING = "SET_EDITING";
export const setEditing = editId => ({
  type: SET_EDITING,
  editId
})