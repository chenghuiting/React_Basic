// 高阶组件

import React, { PureComponent } from 'react'
import About from './pages/About'
import enhancedUserInfo from './hoc/enhanced_props' // 引入高阶组件

const Home = enhancedUserInfo(function (props) {
    return <h1>Home：{props.name}-{props.level}-{props.bannars}</h1>
})

const Profile = enhancedUserInfo(function (props) {
    return <h1>Profile：{props.name}-{props.level}</h1>
})

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home bannars={['轮播图1', '轮播图2', '轮播图3']} />
                <Profile />
                <About />
            </div>
        )
    }
}
