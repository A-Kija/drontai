import { ADD_5, ADD_ONE, ADD_T, RA_CO, REMOVE_5, REMOVE_ONE, REMOVE_T } from "../Constants/actions";
import randColor from '../Functions/randColor';

function count(state, action) {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ONE:
            newState.number++;
            break;
        case REMOVE_ONE:
            newState.number--;
            break;
        case ADD_T:
            newState.number += 2;
            break;
        case REMOVE_T:
            newState.number -= 2;
            break;
        case ADD_5:
            newState.number += 5;
            break;
        case REMOVE_5:
            newState.number -= 5;
            break;
        case RA_CO:
            newState.color = randColor();
            break;
        default:
    }

    return newState;
}

export default count;