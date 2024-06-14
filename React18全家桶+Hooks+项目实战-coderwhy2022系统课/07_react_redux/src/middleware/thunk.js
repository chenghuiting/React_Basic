// thunk 库的核心原理
function thunk(store) {
    const next = store.dispatch
    function dispatchThunk(action) {
        if (typeof action === "function") {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }
    }
    store.dispatch = dispatchThunk
}
// thunk(store)

export default thunk