// 事件总线

import React, { Component } from 'react'
import Home1 from './Home1'
import eventBus from './untils/event-bus'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0,
      height: 0,
    }
  }

  componentDidMount() {
    // 监听对应的事件，接收到传递过来的数据
    // eventBus.on('bannerPrev', (name, age, height) => {
    //   console.log('App中监听到bannerPrev：', name, age, height);
    //   this.setState({ name, age, height })
    // })

    //此处用bind(this)绑定this，否则下面的方法中this是undefined。或者bannerPreClick这个函数用箭头函数表示也可以解决this问题；
    // eventBus.on('bannerPrev', this.bannerPreClick.bind(this))
    // 也可以传入第三个参数this，解决this的问题；
    eventBus.on('bannerPrev', this.bannerPreClick, this)
  }

  bannerPreClick(name, age, height) {
    console.log('App中监听到bannerPrev：', name, age, height);
    // console.log(this);//undefined 
    this.setState({ name, age, height })
  }

  componentWillUnmount() {
    // 组件销毁时记得移除监听
    eventBus.off('bannerPrev', this.bannerPreClick)
  }

  render() {
    const { name, age, height } = this.state
    return (
      <div>
        <h2>App-{name}-{age}-{height}</h2>
        <Home1 />
      </div>
    )
  }
}

export default App