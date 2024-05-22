// tab点击案例
import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['流行', '新款', '精选'],
      titleIndex: 0,
    }
  }
  handelChange(titleIndex) { 
    this.setState({titleIndex})
  }

  render() {
    const { titles, titleIndex } = this.state;
    return (
      <div>
        <TabControl titles={titles} titleIndexChange={(titleIndex) => this.handelChange(titleIndex)} />
        <div>{titles[titleIndex]}</div>
      </div>
    )
  }
}

export default App