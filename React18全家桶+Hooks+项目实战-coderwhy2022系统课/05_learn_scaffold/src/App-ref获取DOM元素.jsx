// ref获取DOM元素

import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}

    this.titleRef = createRef();
    this.titleEl = null;
  }

  getNativeDom() {
    // 方式一：在React元素上绑定一个ref字符串；字符串ref不推荐使用了
    console.log(this.refs.why);

    // 方式二：提前创建好ref对象，createRef()
    console.log(this.titleRef.current);

    // 方式三：传入一个回调函数，在对应的元素被渲染之后，回调函数被执行，并且将元素传入；
    console.log(this.titleEl);
  }

  render() {
    return (
      <div>
        <h2 ref="why">Hello Word</h2>
        <h2 ref={this.titleRef}>你好你哈</h2>  {/* 将创建好的对象绑定到元素上 */}
        <h2 ref={el => this.titleEl = el}>hhhhhhh</h2>
        <button onClick={e => this.getNativeDom()}>获取DOM</button>
      </div>
    )
  }
}

export default App