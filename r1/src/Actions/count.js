import { ADD_5, ADD_ONE, ADD_T, REMOVE_5, REMOVE_ONE, REMOVE_T } from '../Constants/actions';

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

export function add5() {
    return {
        type: ADD_5
    }
}

export function rem5() {
    return {
        type: REMOVE_5
    }
}