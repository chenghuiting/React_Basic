import * as actionType from "./constants"

const initialState = {
    banners: [],
    recommends: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BANNERS:
            return { ...state, banners: action.bunnerList }
        case actionType.RECOMMENDS:
            return { ...state, recommends: action.recommendList }
        default:
            return state
    }
}
export default reducer