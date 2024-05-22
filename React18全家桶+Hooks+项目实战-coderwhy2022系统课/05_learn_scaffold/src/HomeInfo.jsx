import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context';

export class HomeInfo extends Component {
  render() {
    // 第四步操作：获取并使用数据；
    console.log(this.context); //{color: 'red', size: 10}

    return (
      <div>
        {/* 共享多个Context数据的用法 */}
        HomeInfo：{this.context.color}
        <UserContext.Consumer>
          {
            value => {
              return <h2>Infor user：{value.nickName}</h2>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

// 第三步操作：在后代组件中设置组件的 contextType为某一个Context；
HomeInfo.contextType = ThemeContext

export default HomeInfo