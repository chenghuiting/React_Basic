import React, { Component } from 'react'

export default class News extends Component {
    // 2秒钟自动跳转
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/home/message')
    //     }, 200)
    // }
    render() {
        return (
            <ul>
                <li>news01</li>
                <li>news02</li>
                <li>news03</li>
                <li>news04</li>
            </ul>
        )
    }
}
