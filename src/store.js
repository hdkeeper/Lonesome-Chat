/* eslint-env browser */
import '@babel/polyfill';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import reducers from './reducers';

import { LOCAL_STORAGE_SETTINGS } from './constants';
import { loadMessages } from './actions';


const composeEnhancers = (typeof window === 'object')
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
    applyMiddleware(
        thunk,
        logger,
        save(LOCAL_STORAGE_SETTINGS)
    )
);

const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(
    reducers,
    load(LOCAL_STORAGE_SETTINGS)
);

const reloadMessagesFromLocalStorage = () => {
    store.dispatch(loadMessages(JSON.parse(
        window.localStorage.chat_messages
    )));
};

window.addEventListener('storage', reloadMessagesFromLocalStorage);

export default store;
