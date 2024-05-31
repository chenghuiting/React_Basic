// css transition动画

import React, { PureComponent, createRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './app.css'

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
        this.sectionRef = createRef()
    }
    render() {
        const { isShow } = this.state
        return (
            <div>
                <button onClick={e => this.setState({ isShow: !isShow })}>点击切换</button>
                {/* {
                    isShow && <h2>hahahahhahah</h2>
                } */}
                {/* timeout 里的时间要和css中的时间保持一致；timeout决定类的添加和移除时间 */}
                <CSSTransition
                    in={isShow}
                    appear
                    classNames='why'
                    timeout={2000}
                    unmountOnExit={true}
                    nodeRef={this.sectionRef}
                >
                    <h2 className='section' ref={this.sectionRef}>hahahahhahah</h2>
                </CSSTransition>
            </div>
        )
    }
}
