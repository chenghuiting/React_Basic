// Fragment的用法

import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      // <Fragment>
      //   App
      //   <p>1111</p>
      // </Fragment>

      // 语法糖写法
      <>
        App
        <p>1111</p>
      </>
    )
  }
}
