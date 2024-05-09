/*
    该文件用于汇总所有的reducer为一个总的reducer
*/

// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import person from './person'

// 汇总所有的 reducer 变为一个总的 reducer;
export default combineReducers({
    count: count,
    person: person,
})