// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAyncAction } from '../../redux/count_action'

// mapStateToProps函数的返回值作为状态传递给了UI组件
// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value；（把状态带过去）
/*
    1、mapStateToProps函数返回一个对象；
    2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value；
    3、mapStateToProps用于传递状态；
*/
function mapStateToProps(state) { //state为redux中保存的状态（由redux调用，不用自己引入）
    return { count: state }
}

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value；（把操作状态的方法带过去）
/*
    1、mapDispatchToProps函数返回一个对象；
    2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value；
    3、mapDispatchToProps用于传递操作状态的方法；
*/
function mapDispatchToProps(dispatch) {
    return { //返回一个对象，对象里面是一组key value
        jia: data => {
            // 通知redux执行加法
            dispatch(createIncrementAction(data))
        },
        jian: (data) => {
            dispatch(createDecrementAction(data))
        },
        jiaAsync: (data, time) => {
            dispatch(createIncrementAyncAction(data, time))
        }
    }
}

// connect是一个函数，connect函数调用的返回值依然是一个函数
//使用 connect()() 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
