import React, { Component } from 'react'
import './index.css'

// 1.创建 Context 对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {
    state = { username: 'tom', age: 19 }
    render() {
        const { username, age } = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>

                {/* 逐个传递的方法 */}
                {/* <h4>我得用户名是：{this.state.username}</h4>
                <B username={this.state.username} /> */}

                <h4>我的用户名是：{this.state.username}</h4>
                {/*2. 给B组件包裹 <Provider>标签，B组件及B组件身上的所有后代组件就都能收到其父组件通过 context 传来的数据*/}

                {/* 此时传入的 value 是一个对象，当对象的key和value一样时可以简写 */}
                {/* <Provider value={{ username:username, age:age }}> */}
                <Provider value={{ username, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                {/* <h4>我得用户名是：{this.props.username}</h4>
                <C username={this.props.username} /> */}
                <h4>我的用户名是：???</h4>
                <C />
            </div>
        )
    }
}


// class C extends Component {
//     // 3.只有声明才能接收到祖组件通过 context 传来的数据
//     static contextType = MyContext

//     render() {
//         const { username, age } = this.context
//         return (
//             <div className="grand">
//                 <h3>我是C组件</h3>
//                 {/* <h4>我得用户名是：{this.props.username}</h4> */}
//                 <h4>我从A组件接收到的用户名是：{username},年龄是：{age}</h4>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是：
                <Consumer>
                    {/* {
                        value => {
                            return `${value.username},年龄是：${value.age}`
                        }
                    } */}
                    
                    {/* 简写 */}
                    {value => `${value.username},年龄是：${value.age}`}

                </Consumer>
            </h4>
        </div>
    )
}