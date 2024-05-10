import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log(this.props);
        // const { title } = this.props
        // props中包含了children属性，title的值就保留在children属性中
        return (
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />
        )
    }
}

