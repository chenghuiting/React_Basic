import React, { Component } from 'react'
import './style.css'

export class TabControl2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }
    selestedItem(index) {
        const { titleIndexChange } = this.props
        titleIndexChange(index)
        this.setState({ currentIndex: index })
    }
    render() {
        const { titles, itemType } = this.props
        const { currentIndex } = this.state
        return (
            <div className='tab-control'>
                {
                    titles.map((item, index) => {
                        return (
                            <div className={`item ${currentIndex === index ? 'active' : ''}`} key={item} onClick={() => this.selestedItem(index)}>
                                {/* 作用域插槽，回调传入的函数，将item传过去 */}
                                {itemType(item)}
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}

export default TabControl2