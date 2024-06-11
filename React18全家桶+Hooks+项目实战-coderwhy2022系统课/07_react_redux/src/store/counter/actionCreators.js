import * as actionType from "./constants"

export const increaceAction = (count) => ({
    type: actionType.INCREACE,
    count,
})

export const decreaceAction = (count) => ({
    type: actionType.DECREACE,
    count,
})