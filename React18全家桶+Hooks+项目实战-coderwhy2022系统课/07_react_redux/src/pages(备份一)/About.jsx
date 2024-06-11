// react-redux，通过 connect 方法，将 react 和 redux 连接起来，获取store里面的state
// connect方法的两个参数：mapStateToProps、

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { increaceAction, decreaceAction } from '../store/actionCreators'

class About extends PureComponent {

    handleChangeNum(num, isAdd) {
        if (isAdd) {
            this.props.addNum(num)
        } else {
            this.props.subNum(num)
        }
    }

    render() {
        const { counter, recommends, banners } = this.props
        return (
            <div style={{ border: "1px solid red" }}>
                <h2>About: {counter}</h2>
                <div>
                    <button onClick={() => this.handleChangeNum(1, false)}>-1</button>
                    <button onClick={() => this.handleChangeNum(10, false)}>-10</button>
                    <button onClick={() => this.handleChangeNum(1, true)}>+1</button>
                </div>
                <div>
                    <h2>recommends数据：</h2>
                    <ul>
                        {
                            recommends.map((item, index) => {
                                return <li key={index}>{item.title}</li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h2>banners数据：</h2>
                    <ul>
                        {
                            banners.map((item, index) => {
                                return <li key={index}>{item.title}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
// connect的返回值是一个高阶组件，connect接收另外两个函数作为参数；
// function mapStateToProps(state) { // 映射state到props
//     return {
//         // 从state里取出需要映射的数据；通过props的形式传递给About组件，所有在使用时通过this.props获取；
//         counter: state.counter,
//     }
// }

// connect的第二个参数
// function mapDispatchToProps(dispatch) {
//     return {
//         addNum(num) {
//             dispatch(increaceAction(num))
//         },
//         subNum(num) {
//             dispatch(decreaceAction(num))
//         }
//     }
// }

// 将以上方法写成箭头函数
const mapStateToProps = (state) => ({
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
})

const mapDispatchToProps = (dispatch) => ({
    // addNum: function (num) {
    //     dispatch(increaceAction(num))
    // },
    // subNum: function (num) {
    //     dispatch(decreaceAction(num))
    // }

    // ES6增强写法
    // addNum(num) {
    //     dispatch(increaceAction(num))
    // },
    // subNum(num) {
    //     dispatch(decreaceAction(num))
    // }

    // 箭头函数写法
    addNum: num => dispatch(increaceAction(num)),
    subNum: num => dispatch(decreaceAction(num)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)