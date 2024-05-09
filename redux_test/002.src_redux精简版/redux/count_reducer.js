/*
    1、该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数;
    2、reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）
*/

// 初始化状态方法3、const initSate = 0（比较清晰）
const initSate = 0
export default function count_reducer(preState = initSate, action) {
    console.log(preState, action); //0 {type: '@@redux/INITp.w.c.r.o.e'}
    console.log(preState); //点加号，如果方法奏效，preState是变化的
    // 初始化状态方法2、用if判断
    //if (preState === undefined) preState = 0
    // 从action对象中获取：type, data 
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case "increment": //如果是“加”
            return preState + data
        case "decrement": //如果是“减”
            return preState - data
        //break;  //已经return了，就不需要break了
        default:
            // 初始化状态方法1、直接return 0（可读性不强）
            return preState
    }
}