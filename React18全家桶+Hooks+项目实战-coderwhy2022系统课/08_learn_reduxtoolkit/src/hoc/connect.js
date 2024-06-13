import { PureComponent } from "react";
// import store from '../store'
import { StoreContext } from "./StoreContext";

// 自定义实现connect
export function connect(mapStateToProps, mapDispatchToProps) {
    // 返回一个高阶组件（高阶组件本身就是一个函数）
    return function (WrapperComponent) {
        class NewComponent extends PureComponent {
            constructor(props, context) {
                super(props)
                this.state = mapStateToProps(context.getState())
            }

            componentDidMount() {
                // 监听到数据改变时就刷新页面，让页面上的数据更新；
                this.unsubscript = this.context.subscribe(() => {
                    // this.forceUpdate()// 强制刷新页面（不推荐使用）
                    this.setState(mapStateToProps(this.context.getState()))
                })
            }

            componentWillUnmount() {
                // 取消订阅
                this.unsubscript()
            }

            render() {
                const stateObj = mapStateToProps(this.context.getState())
                const dispatchObj = mapDispatchToProps(this.context.dispatch)

                return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
            }
        }
        NewComponent.contextType = StoreContext
        return NewComponent
    }
}