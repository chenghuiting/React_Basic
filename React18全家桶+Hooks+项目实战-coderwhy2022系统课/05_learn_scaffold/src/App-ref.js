// ref获取类组件实例/函数组件DOM

import React, { PureComponent, createRef, forwardRef } from 'react'

class HelloWord extends PureComponent {

  test() {
    console.log('......test.......');
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

const Hello = forwardRef(function (props, ref) {
  return (
    <h1 ref={ref}>你好你好你好你好你好你好</h1>
  )
})

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {}

    this.hrRef = createRef()
    this.nhRef = createRef()
  }
  getComponent() {
    console.log(this.hrRef.current);
    console.log(this.hrRef.current.test);

    console.log(this.nhRef.current);// 拿到<h1>元素
  }

  render() {
    return (
      <div>
        {/* 每写一个HelloWord标签，就会创建一个HelloWord实例 */}
        <HelloWord ref={this.hrRef} />
        <Hello ref={this.nhRef} />
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}
