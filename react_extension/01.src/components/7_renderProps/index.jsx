import React, { Component } from 'react'
import './index.css'
import C from '../1_setState/index'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h1>我是Parent组件</h1>
                {/* <A>hello</A> */}

                {/* <A>
                    <B />
                </A> */}

                {/* 类似于Vue 中的插槽技术 */}
                <A render={(name) => <C name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = { name: 'tom' }
    render() {
        console.log(this.props);
        const { name } = this.state
        return (
            <div className="a">
                <h1>我是A组件</h1>
                {/* <h3>{this.props.children}</h3> */}
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="b">
                <h1>我是B组件,{this.props.name}</h1>
            </div>
        )
    }
}