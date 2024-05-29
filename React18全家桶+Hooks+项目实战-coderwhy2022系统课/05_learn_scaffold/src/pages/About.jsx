import React, { PureComponent } from 'react'
import enhancedUserInfo from '../hoc/enhanced_props'

class About extends PureComponent {
    render() {
        return (
            <div>About：{this.props.name}-{this.props.level}</div>
        )
    }
}

export default enhancedUserInfo(About)