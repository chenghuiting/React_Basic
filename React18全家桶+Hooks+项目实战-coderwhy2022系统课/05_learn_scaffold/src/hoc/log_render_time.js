import React, { PureComponent } from 'react'

function logRenderTime(OriginComponent) {
    // return class NewComponent extends PureComponent {
    return class extends PureComponent { // 此时的类名可以省略，匿名类

        componentWillMount() {
            this.beginTime = new Date().getTime();
        }

        componentDidMount() {
            this.endTime = new Date().getTime();
            console.log(this.endTime);
            console.log(this.beginTime);
            const interval = this.endTime - this.beginTime;
            console.log(`当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`);
        }
        render() {
            return <OriginComponent {...origin} />
        }
    }
}
export default logRenderTime
