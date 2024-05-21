import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
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
        const { titles } = this.props
        const { currentIndex } = this.state
        return (
            <div className='tab-control'>
                {
                    titles.map((item, index) => {
                        return (
                            // <div className={currentIndex === index ? 'item active' : 'item'} key={item} onClick={() => this.selestedItem(index)}>                         
                            <div className={`item ${currentIndex === index ? 'active' : ''}`} key={item} onClick={() => this.selestedItem(index)}>
                                <span className='text'>{item}</span>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}

export default TabControl