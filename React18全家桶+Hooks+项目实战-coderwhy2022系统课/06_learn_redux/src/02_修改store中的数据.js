const store = require('./store')

// 修改store中的数据：必须action
const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)
console.log(store.getState());

const nameAction2 = { type: "change_name", name: "lilei" }
store.dispatch(nameAction2)
console.log(store.getState());

// 修改counter的action
const counterAction = { type: "add_num", num: 10}
store.dispatch(counterAction)
console.log(store.getState());