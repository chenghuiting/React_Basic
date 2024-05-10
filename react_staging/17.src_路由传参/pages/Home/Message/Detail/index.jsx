import React, { Component } from 'react'
import qs from 'querystring' //引入qs库（react已经下载好了，直接引用即可）

// let obj={name:"Tom",age:89}
// console.log(qs.stringify(obj));

// let str='carName=奔驰&price=199'
// console.log(qs.parse(str));

const DetailData = [
    { id: '01', content: 'aaaa' },
    { id: '02', content: 'bbbbb' },
    { id: '03', content: 'cccc' }
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接收 params 参数
        // const { id, title } = this.props.match.params  

        // 接收 search 参数
        // const { search } = this.props.location
        // console.log(qs.parse(search)); //{?id: '01', title: '消息1'}
        // const { id, title } = qs.parse(search.slice(1)) 

        //接收 state 参数
        const { id, title } = this.props.location.state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>ITLE:{title}</li>
                    <li>CONTANT:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
