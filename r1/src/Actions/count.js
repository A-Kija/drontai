import { ADD_ONE, ADD_T, REMOVE_ONE, REMOVE_T } from '../Constants/actions';

export function add1() {
    return {
        type: ADD_ONE
    }
}

export function rem1() {
    return {
        type: REMOVE_ONE
    }
}

export function add2() {
    return {
        type: ADD_T
    }
}

export function rem2() {
    return {
        type: REMOVE_T
    }
}