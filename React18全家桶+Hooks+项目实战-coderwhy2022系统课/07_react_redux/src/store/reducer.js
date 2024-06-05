import * as actionType from "../store/constants"

const initialState = {
    counter: 110,
    banners: [],
    recommends: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.DECREACE:
            return { ...state, counter: state.counter - action.count }
        case actionType.INCREACE:
            return { ...state, counter: state.counter + action.count }
        case actionType.BANNERS:
            return { ...state, banners: action.bunnerList }
        case actionType.RECOMMENDS:
            return { ...state, recommends: action.recommendList }
        default:
            return state
    }
}
export default reducer