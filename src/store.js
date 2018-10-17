import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import journalReducer from './reducers/journal';
import {loadAuthToken, setAuthToken, refreshAuthToken} from './local-storage';

const store = createStore(
    combineReducers({
        auth: authReducer,
        journal: journalReducer
    }),
    applyMiddleware(thunk)
);

// Try to grab authToken from localStorage
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;