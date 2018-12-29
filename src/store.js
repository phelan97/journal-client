import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth';
import userDataReducer from './reducers/user-data';
import pageReducer from './reducers/page';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        auth: authReducer,
        data: userDataReducer,
        page: pageReducer,
        form: formReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

//Try to grab authToken from localStorage
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;