import { ADD_ONE, ADD_T, REMOVE_ONE, REMOVE_T } from "../Constants/actions";

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
        default:
    }

    return newState;
}

export default count;