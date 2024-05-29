import React, { PureComponent } from 'react'

// 高阶组件用法一：定义一个高阶组件：给一些需要特殊数据的组件，注入props；
function enhancedUserInfo(OriginComponent) {
    class NewComponent extends PureComponent {
        constructor() {
            super()
            this.state = {
                userInfo: {
                    name: '111',
                    level: 9,
                }
            }
        }

        render() {
            return <OriginComponent {...this.props} {...this.state.userInfo} />
        }
    }
    return NewComponent
}
export default enhancedUserInfo