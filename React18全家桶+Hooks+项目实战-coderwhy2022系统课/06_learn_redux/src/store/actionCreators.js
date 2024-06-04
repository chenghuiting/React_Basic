const { ADD_NUMBER, CHANGE_NAME, } = require("./constants")

const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    name
})

const addNum = (num) => ({
    type: ADD_NUMBER,
    num
})

// 目前在node环境中导出
module.exports = {
    changeNameAction,
    addNum,
}