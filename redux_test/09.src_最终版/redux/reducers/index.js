/*
该文件用于汇总所有的 reducer ,为一个总的 reducer
*/

// 引入为 Count 组件服务的 reducer
import count from './count'
// 引入为 person 组件服务的 reducer
import persons from './person'
// 引入 combineReducers,用于汇总多个 reducer
import { combineReducers } from 'redux'

// 汇总所有的 reducer 变为一个总的reducer
export default combineReducers({
    // count: count,
    // persons: person
    count,
    persons
})
