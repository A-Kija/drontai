import { GET_TEN, SORT_TEN, SORT_TEN_DESC, SORT_TEN_RESET } from "../Constants/017";
import rand from '../Functions/rand';

function ten(state, action) {
    let newState = [...state];

    switch (action.type) {
        case GET_TEN:
            newState = [];
            [...Array(10)].forEach((_, i) => {
                const number = rand(1, 9);
                newState.push({ row: i, number, line: !(number % 2) })
            });
            break;
        case SORT_TEN:
            newState.sort((a, b) => b.number - a.number);
            break;
        case SORT_TEN_DESC:
            newState.sort((a, b) => a.number - b.number);
            break;
        case SORT_TEN_RESET:
            newState.sort((a, b) => a.row - b.row);
            break;
        default:
    }
    return newState;
}

export default ten;