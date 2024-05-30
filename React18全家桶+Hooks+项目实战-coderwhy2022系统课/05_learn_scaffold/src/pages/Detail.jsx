import React, { PureComponent } from 'react'
import logRenderTime from '../hoc/log_render_time'

class Detail extends PureComponent {
    render() {
        console.log(this.props);
        return (
            <div>
                Detail
                <ul>
                    <li>数据列表</li>
                </ul>
            </div>
        )
    }
}

export default logRenderTime(Detail)