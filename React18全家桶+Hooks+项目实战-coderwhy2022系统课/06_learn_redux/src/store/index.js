// store的创建过程和使用

// node环境要通过CommonJS引入
const { createStore } = require('redux')
const reducer = require("./reducer")

// reducer相关代码抽取到独立文件reducer.js中
// const { ADD_NUMBER, CHANGE_NAME, } = require("./constants")

// 初始化的数据，只会被用一次；
// const initialState = {
//     name: "why",
//     counter: 100,
// }

/*
定义reducer函数（纯函数）
reducer函数会接收两个参数：
 参数一：store中目前保存的state；
 参数二：本次需要更新的action（dispatch传入的action）；
 返回值：它的返回值会作为store之后存储的state；
*/
// function reducer(state = initialState, action) {
//     console.log(state, action);
//     // 有新数据进行更新的时候，那么返回一个新的state；
//     // 如果没有新数据更新，那么返回之前的state；

//     // if (action.type === "change_name") {
//     //     return { ...state, name: action.name }//将原来的数据做一个浅拷贝，并把新数据替换进去；
//     // } else if (action.type === "add_num") {
//     //     return { ...state, counter: state.counter + action.num }
//     // }

//     // 优化：上面的if判断换成switch更好；
//     switch (action.type) {
//         case CHANGE_NAME:
//             return { ...state, name: action.name } // 此处return了，所以不用写break了；
//         case ADD_NUMBER:
//             return { ...state, counter: state.counter + action.num }
//         default:
//             return state
//     }
// }

// 创建Store
const store = createStore(reducer)

module.exports = store

/*
redux代码优化：
 1、将派发的action生成过程放到一个actionCreators函数中；
 2、将定义的所有actionCreators的函数，放到一个独立的文件中：actionCreators.js
 3、actionCreators和reducer函数中使用字符串常量是一致的，所以将常量抽取到一个独立的constants.j文件中；
 4、将reducer和默认值（initialState）放到一个独立的reducer.js文件中，而不是在index.js中；
*/ 