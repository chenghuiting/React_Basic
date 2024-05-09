/*
    该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
*/

// 引入 createStore ,专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 引入汇总之后的 reducer
import reducer from './reducers/index'

// 暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
