// module css 

import React, { PureComponent } from 'react'
import appStyle from './App.module.css'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={appStyle.title}>标题标题标题</h2>
            </div>
        )
    }
}
