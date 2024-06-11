import React, { PureComponent } from 'react'
import store from '../store'
import { increaceAction } from '../store/actionCreators'

export default class Home extends PureComponent {
    constructor() {
        super()
        this.state = {
            counter: store.getState().counter, //页面初始化时展示store里的默认值
        }
    }

    componentDidMount() {
        // 订阅，store中的数据一更新就获取过来
        store.subscribe(() => {
            const state = store.getState()
            this.setState({ counter: state.counter })
        })
    }

    increace(num) {
        store.dispatch(increaceAction(num))
    }

    render() {
        return (
            <div style={{ border: "1px solid red" }}>
                <h2>Home Counter: {this.state.counter}</h2>
                <div>
                    <button onClick={() => this.increace(1)}>+1</button>
                    <button onClick={() => this.increace(5)}>+5</button>
                    <button onClick={() => this.increace(8)}>+8</button>
                </div>
            </div>
        )
    }
}
