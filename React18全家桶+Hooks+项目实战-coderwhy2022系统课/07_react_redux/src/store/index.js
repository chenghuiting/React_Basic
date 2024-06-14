import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import { thunk } from 'redux-thunk'
import counterReducer from './counter/reducer'
import homeReducer from './home/reducer'

/*
    正常情况下，store.dispatch(object)即只能派发一个对象；
    想要派发函数store.dispatch(function)必须要对store进行增强；
*/

// redux-devtools 在开发环境打开，在生产环境不用打开；打包时还需要做是生产环境还是开发环境的判断
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose; // 开启trace

// applyMiddleware(thunk, xx, xx) 可以传入多个中间键；
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// 将两个reducer合并到一起
const reducer = combineReducers({
    counter: counterReducer,
    home: homeReducer,
})

// // combineReducers实现原理
// function reducer(state = {}, action) { // 
//     // 返回一个对象，store中的state；
//     return {
//         counter: counterReducer(state.counter, action),
//         home: homeReducer(state.home, action),
//     }
// }

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer)

// 实现打印日志的中间件
// 对每次派发的action进行拦截，进行日志打印
function log(store) {
    const next = store.dispatch

    function logAndDispatch(action) {
        console.log('当前派发的action', action);
        // 真正派发的代码：使用之前dispatch进行派发；
        next(action)

        console.log('派发之后的结果', store.getState());

    }
    /*
     monkey patch 猴补丁=》篡改现有的代码，对整体的执行程序进行修改； 
     意味着执行 store.dispatch()时，实际上是在执行logAndDispatch函数；   
    */
    store.dispatch = logAndDispatch
}
log(store)

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
thunk(store)

export default store