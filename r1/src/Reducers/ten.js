import { GET_TEN } from "../Constants/017";
import rand from '../Functions/rand';

function ten(state, action) {
    let newState = [...state];

    switch(action.type) {
        case GET_TEN:
            newState = [];
            [...Array(10)].forEach(() => newState.push(rand(1, 9)));
            break;
        default:
    }
    return newState;
}

export default ten;