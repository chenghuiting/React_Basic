import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
        }
    }
    handleLogin() {
        this.setState({ isLogin: true })
    }

    render() {
        return (
            <div style={{ border: ' 1px solid black', height: 200, width: 400 }}>
                <h1>Login</h1>
                {!this.state.isLogin ? <button onClick={() => this.handleLogin()}>登录</button> : <Navigate to="/home" />}
            </div>
        )
    }
}

export default Login