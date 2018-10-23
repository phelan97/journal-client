import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/auth';
import userDataReducer from './reducers/user-data';
import pageReducer from './reducers/page';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        auth: authReducer,
        data: userDataReducer,
        page: pageReducer,
        form: formReducer
    }),
    // TODO: conditionally use tools based on env
    //composeWithDevTools(applyMiddleware(thunk))
    applyMiddleware(thunk)
);

//Try to grab authToken from localStorage
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;