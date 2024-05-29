// 高阶组件应用-登录鉴权（用户未登录时展示的是登录界面，登录了才可以展示购物车界面）

import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export default class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            isLogin: false
        }
    }

    handleLogin() {
        localStorage.setItem('token', '11111')
        this.setState({ isLogin: true })
        // this.forceUpdate() //不setState，强制刷新界面，不推荐使用；
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.handleLogin() }}>登录</button>
                App
                <Cart />
            </div>
        )
    }
}
