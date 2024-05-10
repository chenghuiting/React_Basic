import React, { Component } from 'react'

const DetailData = [
    { id: '01', content: '11111' },
    { id: '02', content: '22222' },
    { id: '03', content: '33333' },
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接收 params 参数
        const { id, title } = this.props.match.params
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
