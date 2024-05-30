// React的Portals将内容挂载到其他DOM上；Modal案例

import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export default class App extends PureComponent {
    render() {
        return (
            <div className='app'>
                <h1>App H1</h1>
                {
                    createPortal(<h2>App H2</h2>, document.querySelector('#why'))
                }

                {/* 2、Modal 组件 */}
                <Modal>
                    <h1>标题</h1>
                    <h2>hhhhhhhhh</h2>
                </Modal>
            </div>
        )
    }
}
