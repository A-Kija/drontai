import { GET_FROM_SERVER, SORT_BOOKS } from "../Constants/books";

export function getFromServer(data) {
    return {
        type: GET_FROM_SERVER,
        payload: data
    }
}

export function sortBooks(select) {
    return {
        type: SORT_BOOKS,
        payload: select
    }
}