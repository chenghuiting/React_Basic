import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAyncAction } from '../../redux/count_action'

// 映射状态
// function mapStateToProps(state) { //state为redux中保存的状态（由redux调用，不用自己引入）
//     return { count: state }
// }

// const mapStateToProps = (state) => { 
//     return { count: state }
// }

// const mapStateToProps = state => ({ count: state })


// 映射操作状态的方法
// const mapDispatchToProps = dispatch => (
//     { //返回一个对象，对象里面是一组key value
//         jia: data => {
//             // 通知redux执行加法
//             dispatch(createIncrementAction(data))
//         },
//         jian: (data) => {
//             dispatch(createDecrementAction(data))
//         },
//         jiaAsync: (data, time) => {
//             dispatch(createIncrementAyncAction(data, time))
//         }
//     }
// )

// 定义UI组件
class Count extends Component {
    state = {}

    // 加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 500)
    }

    render() {
        console.log('UI组件接收到的props是：', this.props);
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

// connect是一个函数，connect函数调用的返回值依然是一个函数
//使用 connect()() 创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state }),

    // mapDispatchToProps的一般写法（写成一个函数）
    // dispatch => ({ //返回一个对象，对象里面是一组key value
    //     jia: data => {
    //         // 通知redux执行加法
    //         dispatch(createIncrementAction(data))
    //     },
    //     jian: (data) => {
    //         dispatch(createDecrementAction(data))
    //     },
    //     jiaAsync: (data, time) => {
    //         dispatch(createIncrementAyncAction(data, time))
    //     }
    // })
    // mapDispatchToProps的一般简写(可以简写成一个对象)
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAyncAction,
    }
)(Count)
