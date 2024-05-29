// 高阶组件应用-context共享

import React, { PureComponent } from 'react'
import ThemeContext from './context/theme-context'
import Product from './Product'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
                    <Product />
                </ThemeContext.Provider>
            </div>
        )
    }
}
