import { USER_LOGIN } from '../constants';

const initialState = {};

/*  Текущий пользователь:
    { name }
*/

export default function user(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                name: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
