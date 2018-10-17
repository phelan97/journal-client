import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected';
import {loadAuthToken, setAuthToken, refreshAuthToken} from './local-storage';

const store = createStore(
    combineReducers({
        auth: authReducer,
        protectedData: protectedDataReducer
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