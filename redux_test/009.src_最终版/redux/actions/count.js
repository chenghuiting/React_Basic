/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from '../constant'
// import store from './store'

// 同步 action ，就是指action的值为Object类型的一般对象；
// function createIncrementAction(data) {
//     return { type: 'increment', data: data }
// }
export const increment = data => ({ type: INCREMENT, data: data })
// function createDecrementAction(data) {
//     return { type: 'decrement', data: data }
// }
export const decrement = data => ({ type: DECREMENT, data: data })

// 异步 action ，就是指action的值为函数；异步action中一般都会调用同步action；异步 action不是必须要用的
// export const createIncrementAyncAction = (data, time) => {
//     return () => {
//         setTimeout(() => {
//             store.dispatch(createIncrementAction(data))
//         }, time)
//     }
// }

export const incrementAync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}