import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    render() {
        console.log('Header组件收到的props是', this.props); //App没有传参数过来，此处打印的就是一个空对象 {}
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>
            </div>
        )
    }
}

// withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter 的返回值是一个新组件
export default withRouter(Header)
