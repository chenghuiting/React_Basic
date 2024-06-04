const store = require('./store')
const { changeNameAction, addNum } = require("./store/actionCreators")

// 优化："订阅数据的变化
store.subscribe(() => {
    console.log("订阅数据的变化：", store.getState());
})

// actionCreators：帮助我们创建action
// const changeNameAction = (name) => {
//     return {
//         type: "change_name",
//         name
//     }
// }

// 箭头函数的省略写法
// const changeNameAction = (name) => ({
//     type: "change_name",
//     name
// })

// store.dispatch({ type: "change_name", name: "kobe" })
store.dispatch(changeNameAction("kobe"))

// store.dispatch({ type: "change_name", name: "lilei" })
store.dispatch(changeNameAction("lilei"))

// const addNum = (num) => ({
//     type: "add_num",
//     num
// })

store.dispatch(addNum(10))
