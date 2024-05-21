import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AddCounter extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    addCount(count) {
        // 将count参数传给父组件
        this.props.addClick(count)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addCount(1)}>+1</button>
                <button onClick={() => this.addCount(5)}>+5</button>
                <button onClick={() => this.addCount(10)}>+10</button>
            </div>
        )
    }
}
AddCounter.propTypes = {// 对props进行类型限制
    addClick: propTypes.func
}

export default AddCounter