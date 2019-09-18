import {
    ADD_MESSAGE,
    LOAD_MESSAGES,
    CLEAR_MESSAGES
} from '../constants';

const initialState = [];

/*  Список сообщений:
    [
        { user, text, timestamp },
        ...
    ]
*/

// Максимальное количество сообщений, хранимых в истории
const MAX_MESSAGES = 100;

export default function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return [...state, action.payload].slice(-MAX_MESSAGES);
        }

        case LOAD_MESSAGES: {
            return [...action.payload];
        }

        case CLEAR_MESSAGES: {
            return [];
        }

        default: {
            return state;
        }
    }
}
