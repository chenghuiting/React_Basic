// Redux 的模块拆分

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
      /*
  页面初始化时展示store里的默认值;
  原来是从store中的state里拿counter数据；模块拆分以后是从counter模块中拿counter数据；

  拆分前：
  state={
    counter: 100,
    banners:[],
  }

  拆分后：
  {
    counter:{counter: 100,},
    home:{banners:[],recommends}
  }
*/
      counter: store.getState().counter.counter,
    }
  }

  componentDidMount() {
    // 订阅，store中的数据一更新就获取过来
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter.counter })
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