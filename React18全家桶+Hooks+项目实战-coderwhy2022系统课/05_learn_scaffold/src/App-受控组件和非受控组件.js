// 受控组件和非受控组件

import React, { PureComponent, } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: '',
      userName: '23231'
    }
  }

  inputChange(e) {
    console.log(e.target.value);
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div>
        {/* 一旦input绑定了value就是一个受控组件了，此时用户输入没有反应，用onChange获取到值的改变*/}
        <input type='text' value={this.state.userName} onChange={e => this.inputChange(e)} />
        
        {/* 非受控组件，由自己控制的，不是由react来控制的 */}
        <input type='text' />
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}
