import React, { Component } from 'react'
import C from '../1_setState'
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                {/* 组件标签的标签体内容是一个特殊的标签属性，属性名叫 children ；通过 this.props.children 拿到*/}

                {/* Hello! */} {/* 相当于children props */}
                {/* 将 B 组件作为 A 组件的标签体内容，让它两形成父子关系 */}
                {/* <A>
                    <B />
                </A> */}

                <A render={(name) => <B name={name} />} />

                {/* 可以放入任意组件，类似于Vue里的插槽技术 */}
                <A render={(name) => <C name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = { name: 'Tom' }
    render() {
        console.log(this.props); // {children: 'Hello!'}
        const { name } = this.state
        return (
            <div className='a'>
                <h3>我是A组件</h3>
                {/* {this.props.children} */}

                {/* 预留位置接收组件，类似于Vue里的插槽技术 */}
                {this.props.render(name)}

                {/* <B /> */}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='b'>
                <h3>我是B组件</h3>
            </div>
        )
    }
}