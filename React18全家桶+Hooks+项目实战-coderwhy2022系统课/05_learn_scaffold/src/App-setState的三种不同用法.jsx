// setState的三种不同用法
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hhhhh',
      counter: 0,
    }
  }

  changeText() {
    // setState的三种用法：
    //1、基本使用： react内部是做了Object.assign()这个操作（Object.assign()浅拷贝，合并多个JS对象，新属性会覆盖掉前面的属性）

    /*
      2、setState可以传入一个回调函数：
       好处一：可以在回调函数中编写新的state的逻辑；
       好处二：当前的回调函数会将state和props传递进来；
    */
    this.setState((state, props) => {
      console.log(state, props);//
      return {
        // 编写一写对新的state的处理逻辑
        message: '你好你好你好'
      }
    })

    /*
      3、setState在react的事件处理中是一个异步调用；
       如果希望在数据更新之后（即数据合并）获取到对应的结果来执行一写逻辑代码，那么可以在
       setState中传入第二个参数：callback
    */
    this.setState({}, () => { })
  }

  increment() {

  }

  render() {
    const { message, counter } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <h2>当前计数：{counter}</h2>
        <button onClick={e => this.increment()}>counter+1</button>
      </div>
    )
  }
}

export default App