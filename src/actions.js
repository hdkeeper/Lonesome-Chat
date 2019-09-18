import {
    USER_LOGIN,
    ADD_MESSAGE,
    LOAD_MESSAGES,
    CLEAR_MESSAGES
} from './constants';


export const userLogin = (name) => ({
    type: USER_LOGIN,
    payload: name
});

export const addMessage = (user, text, timestamp) => ({
    type: ADD_MESSAGE,
    payload: { user, text, timestamp }
});

export const loadMessages = (messages) => ({
    type: LOAD_MESSAGES,
    payload: messages
});

export const clearMessages = () => ({
    type: CLEAR_MESSAGES
});
