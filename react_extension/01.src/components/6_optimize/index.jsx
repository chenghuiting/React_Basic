import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = { carName: '奔驰C63' }

    changeCar = () => {
        this.setState({ carName: '迈巴赫' })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.prop, this.state); // 目前的 props 和 state
    //     console.log(nextProps, nextState); // 接下来要变化的目标 props,目标 state
    //     return this.state.carName === nextState.carName
    // }

    render() {
        console.log('Parent---render');

        const { carName } = this.state
        return (
            <div className="parent">
                <h1>我是Parent组件</h1>
                <span>我的车名是：{carName}</span>
                <button onClick={this.changeCar}>点击换车</button>
                <Child carName={carName} />
            </div>
        )
    }
}
class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.prop, this.state); // 目前的 props 和 state
    //     console.log(nextProps, nextState); // 接下来要变化的目标 props,目标 state
    //     return this.state.carName === nextState.carName
    // }

    render() {
        console.log('Child---render');

        return (
            <div className="child">
                <h1>我是Child组件</h1>
                <h4>我接到的车是：{this.props.carName}</h4>
            </div>
        )
    }
}