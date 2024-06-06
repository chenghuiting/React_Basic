import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './reducer'

/*
    正常情况下，store.dispatch(object)即只能派发一个对象；
    想要派发函数store.dispatch(function)必须要对store进行增强；
*/

// redux-devtools 在开发环境打开，在生产环境不用打开；打包时还需要做是生产环境还是开发环境的判断
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose; // 开启trace

// applyMiddleware(thunk, xx, xx) 可以传入多个中间键；
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store