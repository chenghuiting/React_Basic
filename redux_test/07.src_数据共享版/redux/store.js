/*
    该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
*/

// 引入 createStore ,专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为 Count 组件服务的 reducer
import countReducer from './reducers/count'
// 引入personReducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 汇总所有的 reducer 变为一个总的reducer
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})
// 暴露store
export default createStore(allReducer, applyMiddleware(thunk))