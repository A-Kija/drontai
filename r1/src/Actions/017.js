import { COLOR_3, COLOR_3_BORDER, COLOR_3_SIZE } from "../Constants/017";

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