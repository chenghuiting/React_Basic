import React, { PureComponent } from 'react'
import withTheme from './hoc/with_theme'

// 基础的运用context的写法
// export default class Product extends PureComponent {
//     render() {
//         return (
//             <div>
//                 Product
//                 <ThemeContext.Consumer>
//                     {
//                         value => {
//                             return <h2>theme:{value.color}-{value.size}</h2>
//                         }
//                     }
//                 </ThemeContext.Consumer>
//             </div>
//         )
//     }
// }

// 利用高阶组件增强context写法
class Product extends PureComponent {
    render() {
        return (
            <div>Product：<h2>{this.props.color}-{this.props.size}</h2></div>
        )
    }
}

export default withTheme(Product)