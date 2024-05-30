// 高阶组件应用三-劫持生命周期，在生命周期中完成自己的逻辑

import React, { PureComponent } from 'react'
import Detail from './pages/Detail'

export default class App extends PureComponent {
    constructor() {
        super()
        this.setState = {}
    }

    // componentWillMount() {
    //     this.beginTime = new Date().getTime(); // 在组件实例上写入了一个beginTime属性；
    //     this.aa = 'pppp'; // 在组件实例上写入了一个aa属性；
    // }

    // componentDidMount() {
    //     this.endTime = new Date().getTime();
    //     console.log(this);
    //     console.log(this.endTime);
    //     console.log(this.beginTime);
    //     const interval = this.endTime - this.beginTime;
    //     console.log(interval);
    // }

    render() {
        return (
            <div>
                App
                <Detail />
            </div>
        )
    }
}
