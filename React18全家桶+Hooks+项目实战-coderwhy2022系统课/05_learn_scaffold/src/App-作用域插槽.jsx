// 作用域插槽
import React, { Component } from 'react'
import TabControl2 from './TabControl2'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            titles: ['流行', '新款', '精选'],
            titleIndex: 0,
        }
    }
    handelChange(titleIndex) {
        this.setState({ titleIndex })
    }

    getTabItem(item) {
        if (item === '流行') {
            return <button>{item}</button>
        } else if (item === '精选') {
            return <span>{item}</span>
        } else {
            return <i>{item}</i>
        }
    }

    render() {
        const { titles, titleIndex } = this.state;
        return (
            <div>
                <TabControl2
                    titles={titles}
                    titleIndexChange={(titleIndex) => this.handelChange(titleIndex)}
                    // 传入一个函数，接收传过来的item
                    // itemType={(item) => <button>{item}</button>}

                    //  还可以根据不同的名字返回不同的元素
                    itemType={item => this.getTabItem(item)}
                    {...this.state.data}
                />
                <div>{titles[titleIndex]}</div>
            </div>
        )
    }
}

export default App