// styled-components

import React, { PureComponent } from 'react'
import { AppWrapper, SectionWrapper } from './style'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: "yellow",
      size: 30
    }
  }
  render() {
    const { color, size } = this.state
    return (
      <AppWrapper size={size} color={color}>
        <div className='title'>哈哈哈哈哈哈哈哈哈</div>
        <button onClick={() => this.setState({ color: 'black' })}>修改颜色</button>
        <SectionWrapper>
          <h2 className='secsionh2'>呵呵呵呵呵呵呵</h2>
          <p>qqqqqq</p>
        </SectionWrapper>
      </AppWrapper>
    )
  }
}

// const name = 'merry'
// const age = 89

// function foo(...args) {
//   console.log(args);
// }
// foo`名字是：${name},年龄是：${age}` // 表示对函数进行调用


