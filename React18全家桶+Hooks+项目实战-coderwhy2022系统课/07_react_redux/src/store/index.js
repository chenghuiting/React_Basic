import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './reducer'

/*
    正常情况下，store.dispatch(object)即只能派发一个对象；
    想要派发函数store.dispatch(function)必须要对store进行增强；
*/


// applyMiddleware(thunk, xx, xx) 可以传入多个中间键；
const store = createStore(reducer, applyMiddleware(thunk))

export default store