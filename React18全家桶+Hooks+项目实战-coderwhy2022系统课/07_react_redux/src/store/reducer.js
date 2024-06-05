import * as actionType from "../store/constants"

const initialState = {
    counter: 110,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.DECREACE:
            return { ...state, counter: state.counter + action.count }
        case actionType.INCREACE:
            return { ...state, counter: state.counter + action.count }
        default:
            return state
    }
}
export default reducer