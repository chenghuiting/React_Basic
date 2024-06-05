import React, { PureComponent } from 'react'
import store from '../store'
import { decreaceAction } from '../store/actionCreators'

export default class Profile extends PureComponent {
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


    decreace(num) {
        store.dispatch(decreaceAction(num))
    }


    render() {
        return (
            <div style={{ border: "1px solid green" }}>
                <h2>Profile Counter: {this.state.counter}</h2>
                <div>
                    <button onClick={() => this.decreace(-1)}>-1</button>
                    <button onClick={() => this.decreace(-5)}>-5</button>
                    <button onClick={() => this.decreace(-8)}>-8</button>
                </div>
            </div>
        )
    }
}
