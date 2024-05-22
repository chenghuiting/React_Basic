// 插槽的两种方案
import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export class App extends Component {
    render() {
        const btn = <button>按钮2</button>;
        return (
            <div>
                {/* 1、使用children实现插槽的 */}
                <NavBar>
                    {/* 放多个元素时，children拿到的是数组；放一个元素时， children拿到的就是那个元素*/}
                    <button>点击</button>
                    <h2>你好你好你好</h2>
                    <div>3444</div>
                </NavBar>

                {/* 2、使用props实现插槽的 */}
                <NavBar2
                    leftSlot={btn}
                    centerSlot={<h1>标题</h1>}
                    rightSlot={333}
                />
            </div>
        )
    }
}

export default App