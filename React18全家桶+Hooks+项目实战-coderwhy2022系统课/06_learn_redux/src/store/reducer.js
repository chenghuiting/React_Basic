const { ADD_NUMBER, CHANGE_NAME, } = require("./constants")

// 初始化的数据，只会被用一次；
const initialState = {
    name: "why",
    counter: 100,
}

/*
定义reducer函数（纯函数）
reducer函数会接收两个参数：
 参数一：store中目前保存的state；
 参数二：本次需要更新的action（dispatch传入的action）；
 返回值：它的返回值会作为store之后存储的state；
*/
function reducer(state = initialState, action) {
    console.log(state, action);
    // 有新数据进行更新的时候，那么返回一个新的state；
    // 如果没有新数据更新，那么返回之前的state；

    // if (action.type === "change_name") {
    //     return { ...state, name: action.name }//将原来的数据做一个浅拷贝，并把新数据替换进去；
    // } else if (action.type === "add_num") {
    //     return { ...state, counter: state.counter + action.num }
    // }

    // 优化：上面的if判断换成switch更好；
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name } // 此处return了，所以不用写break了；
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        default:
            return state
    }
}
module.exports = reducer