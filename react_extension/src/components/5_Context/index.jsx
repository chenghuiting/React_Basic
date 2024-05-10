import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()
//解构赋值，从 MyContext 身上取出 Provider；或者直接在下面写 <MyContext.Provider>
// 函数式组件时引入 Consumer
const { Provider, Consumer } = MyContext

export default class A extends Component {
    state = { username: 'tom', age: 18 }

    render() {
        const { username, age } = this.state
        return (
            <div className='parent'>
                <h1>我是A组件</h1>
                <h4>我的用户名是：{username}</h4>
                <Provider value={{ username: username, age: age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h1>我是B组件</h1>
                <h4>我从A组件接到的用户名是：{this.props.username}</h4>
                <C username={this.props.username} />
            </div>
        )
    }
}

// 第一种方式：仅适用于类式组件
// class C extends Component {
//     // 注意：哪个组件要用 Context，就必须要声明接收 Context。
//     static contextType = MyContext

//     render() {
//         console.log(this);
//         console.log(this.context);
//         return (
//             <div className='grand'>
//                 <h1>我是C组件</h1>
//                 <h4>我从B组件接到的用户名是：{this.context.username}，年龄是：{this.context.age}</h4>
//             </div>
//         )
//     }
// }

// 第二种方式：函数式组件和类式组件都可以
// 如果 C 组件是函数式组件
function C() {
    return (
        <div className='grand'>
            <h1>我是C组件</h1>
            <h4>我从B组件接到的用户名是：
                <Consumer>
                    {
                        // value => {
                        //     console.log(value);
                        //     return `${value.username}，年龄是：${value.age}`
                        // }

                        // 箭头函数并且函数体只有一条语句，简写
                        value => `${value.username}，年龄是：${value.age}`
                    }
                </Consumer>
            </h4>
        </div>
    )
}