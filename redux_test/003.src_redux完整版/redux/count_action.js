/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

// function createIncrementAction(data) {
//     return { type: 'increment', data: data }
// }
export const createIncrementAction = data => ({ type: INCREMENT, data: data })

// function createDecrementAction(data) {
//     return { type: 'decrement', data: data }
// }
export const createDecrementAction = data => ({ type: DECREMENT, data: data })

