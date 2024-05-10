import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [
    { id: '01', content: '11111' },
    { id: '02', content: '22222' },
    { id: '03', content: '33333' },
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接收 params 参数
        // const { id, title } = this.props.match.params

        // 接收 search 参数
        // const { search } = this.props.location
        // const result = qs.parse(search) 
        // console.log(result);  //{?id: "01", title: "消息1"}
        // const { id, title } = qs.parse(search.slice(1))  //转成对象格式，并截取掉最前面的问号

        // 接收state参数
        const { id, title } = this.props.location.state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
