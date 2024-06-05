import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Category from './pages/Category'
import store from './store'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter, //页面初始化时展示store里的默认值
    }
  }

  componentDidMount() {
    // 订阅，store中的数据一更新就获取过来
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter })
    })
  }

  render() {
    return (
      <div>
        <h2>App Counter: {this.state.counter}</h2>
        <Home />
        <Profile />
        <About />
        <Category />
      </div>
    )
  }
}

