// 改变标题案例类组件写法；
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>计数：{counter}</h2>
        <button onClick={e => this.setState({ counter: counter + 1 })}>修改数据</button>
      </div>
    )
  }
}

