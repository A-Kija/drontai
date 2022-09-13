import { ADD_SOME, COLOR_3, COLOR_3_BORDER, COLOR_3_BORDER_STYLE, COLOR_3_SIZE, REM_SOME } from "../Constants/017";

export function actionColor3() {
    return {
        type: COLOR_3
    }
}

export function actionColor3Size() {
    return {
        type: COLOR_3_SIZE
    }
}

export function actionColor3Border(border) {
    return {
        type: COLOR_3_BORDER,
        payload: border
    }
}

export function actionColor3BorderStle(border) {
    return {
        type: COLOR_3_BORDER_STYLE,
        payload: border
    }
}

export function addSome(what) {
    return {
        type: ADD_SOME,
        payload: what
    }
}

export function remSome(what) {
    return {
        type: REM_SOME,
        payload: what
    }
}