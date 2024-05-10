import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        // 对象式的setState
        // const { count } = this.state
        // this.setState({ count: count + 1 }, () => {
        //     console.log('9行的输出', this.state.count);
        // })
        // // react状态的更新是异步的
        // console.log('12行的输出', this.state.count); //慢setState一步

        // 函数式的setState
        // this.setState((state, props) => { //setState写成一个函数可以拿到 state 和 props；
        //     console.log(state, props); // {count: 0}  {x: 101}
        //     return { count: state.count + 1 }
        // })

        // 省略 props后精简写法
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
