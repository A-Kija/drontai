import { GET_FROM_SERVER } from "../Constants/books";

function booksReducer(state, action) {
    let newState = [...state ?? []];

    switch(action.type) {

        case GET_FROM_SERVER:
            newState = action.payload.map((b, i) => ({...b, row: i}));
            break;
        default:
    }

    return newState;
}

export default booksReducer;