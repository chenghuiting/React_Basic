// classnames库的使用

import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            isaaa: true,
            isbbb: true,
            isccc: true,
        }
    }
    render() {
        const { isbbb, isccc } = this.state
        const classList = ['aaa'];
        if (isbbb) classList.push('bbb')
        if (isccc) classList.push('ccc')
        const className = classList.join(" ")

        return (
            <div>
                {/* className里面可以是一个数组 */}
                <h2 className={className}>hahhhaahahhahah</h2>

                <h2 className={classNames("aaa", { bbb: isbbb, ccc: isccc })}>哈哈哈哈哈哈哈哈</h2>
            </div>
        )
    }
}
