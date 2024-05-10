import React from 'react'
import { useParams, useMatch, useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
    // 方法一：利用 useParams
    // const a = useParams()
    // console.log(a); //{id: '001', title: '消息1', content: '1111'}
    // const { id, title, content } = useParams() //解构赋值，拿到 id, title, content

    // 方法二：利用 useMatch（需传入完整 path）（用的不多）
    //const x = useMatch('/home/message/detail/:id/:title/:content')
    //console.log(x); //{params: {…}, pathname: '/home/message/detail/001/%E6%B6%88%E6%81%AF1/1111', pathnameBase: '/home/message/detail/001/%E6%B6%88%E6%81%AF1/1111', pattern: {…}}

    // 接收路由的 Search 参数
    // const [search, setSearch] = useSearchParams()
    // console.log(search.get('id'));
    // console.log(search.get('title'));
    // console.log(search.get('content'));
    // const id = search.get('id')
    // const title = search.get('title')
    // const content = search.get('content')

    // 接收路由的 state 参数
    const x = useLocation()
    console.log(x);
    const { state: { id, title, content } } = useLocation() //连续解构赋值

    return (
        <ul>
            {/*setSearch 用的不多，了解即可  */}
            {/* <li>
                <button onClick={() => setSearch('id=008&title=哈哈&content=嘻嘻')}>点我更新一下收到的search参数</button>
            </li> */}

            {/* 展示 useParams、Search、state 参数 */}
            <li>消息的编号：{id}</li>
            <li>消息的标题：{title}</li>
            <li>消息的内容：{content}</li>
        </ul>
    )
}
