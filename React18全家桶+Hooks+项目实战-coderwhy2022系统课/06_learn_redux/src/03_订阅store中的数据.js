const store = require('./store')

// 优化："订阅数据的变化
store.subscribe(() => {
    console.log("订阅数据的变化：", store.getState());
})

store.dispatch({ type: "change_name", name: "kobe" })
store.dispatch({ type: "change_name", name: "lilei" })
store.dispatch({ type: "add_num", num: 10 })
