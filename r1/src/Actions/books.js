import { GET_FROM_SERVER } from "../Constants/books";

export function getFromServer(data) {
    return {
        type: GET_FROM_SERVER,
        payload: data
    }
}