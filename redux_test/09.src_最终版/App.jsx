import React, { Component } from 'react'
import Count from './containers/Count' //引入的是 Count 的容器组件
import store from './redux/store'
import Person from './containers/Person' //引入的是 Person 的容器组件

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递store */}
                <Count store={store} />
                <hr />
                <Person />
            </div>
        )
    }
}
