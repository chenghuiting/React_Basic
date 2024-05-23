import React, { Component } from 'react'
import eventBus from './untils/event-bus';

export class HomeBanner1 extends Component {

  preClick() {
    console.log('上一个');
    // 发射一个事件，并传递数据
    eventBus.emit('bannerPrev', 'why', 18, 1.88)
  }
  nextClick() {
    console.log('下一个');
  }

  render() {
    return (
      <div>
        <h2>HomeBanner1</h2>
        <button onClick={e => this.preClick()}>上一个</button>
        <button onClick={e => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner1