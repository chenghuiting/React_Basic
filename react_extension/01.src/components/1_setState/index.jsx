import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        // // 对象式的 setState
        // // 1.获取原来的count值
        // const { count } = this.state
        // // 2.更新状态（react状态的更新是异步的）
        // this.setState({ count: count + 1 }, () => {
        //     // 这种回调查看的状态是最新的
        //     console.log(this.state.count);  //1
        // })
        // // 状态是 react 更新的，
        // console.log(this.state.count); //0 

        // 函数式的 setState
        // this.setState((state, props) => {  
        //     console.log(state, props);
        //     return {
        //         count: state.count + 1
        //     }
        // })
        // 函数式的 setState 的精简写法
        this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
