// store的创建过程和使用

// node环境要通过CommonJS引入
const { createStore } = require('redux')

// 初始化的数据
const initialState = {
    name: "why",
    counter: 100,
}

// 定义reducer函数（纯函数）
function reducer() {
    return initialState
}

// 创建Store
const store = createStore(reducer)

module.exports = store