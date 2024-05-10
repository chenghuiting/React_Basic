//实际开发中不用shouldComponentUpdate（阀门里的逻辑需要自己去判断），而是用PureComponent（PureComponent帮忙判断）
import React, { Component, PureComponent } from 'react'
import './index.css'

// export default class Parent extends Component {
export default class Parent extends PureComponent {
    state = { carName: '奔驰C63' }
    changeCar = () => {
        this.setState({ carName: '迈巴赫' })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);//目前的 props 和 state
        console.log(nextProps, nextState); //接下来变化的目标  props 和目标 state   
        // if (this.state.carName === nextState.carName) return false
        // else return true

        // 简写
        return !this.state.carName === nextState.carName
    }

    render() {
        console.log('Parent---render');
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{this.state.carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={this.state.carName} />
            </div>
        )
    }
}

// class Child extends Component {
class Child extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        // if (this.props.carName === nextProps.carName) return false
        // else return true

        //简写
        return !this.props.carName === nextProps.carName
    }

    render() {
        console.log('Child---render');
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}