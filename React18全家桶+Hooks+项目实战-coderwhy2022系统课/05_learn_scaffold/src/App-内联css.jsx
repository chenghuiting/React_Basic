import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            size: 30,
        }
    }

    addSize() {
        this.setState({ size: this.state.size + 20 })
    }

    render() {
        const { size } = this.state
        return (
            <div>
                <button onClick={() => this.addSize()}>点击</button>
                <h2 style={{ color: 'red' }}>我是标题</h2>
                <p style={{ fontSize: `${size}px` }}>hhhhhhhhhhh</p>
            </div>
        )
    }
}
