import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: '001', title: '消息1', content: '1111' },
        { id: '002', title: '消息2', content: '2222' },
        { id: '003', title: '消息3', content: '3333' },
        { id: '004', title: '消息4', content: '4444' },
    ])

    return (
        <div>
            <ul>
                {
                    messages.map((m) => {
                        return (
                            // 路由链接

                            // <li key={m.id}>
                            //     {/* 路由传递 params 参数 */}
                            //     <Link to={`detail/${m.id}/${m.title}/${m.content}`} >{m.title}</Link>
                            // </li>

                            // <li key={m.id}>
                            //     {/* 路由传递 search 参数 */}
                            //     <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`} >{m.title}</Link>
                            // </li>

                            <li key={m.id}>
                                {/* 路由传递 state 参数 */}
                                <Link
                                    to='detail'
                                    state={{
                                        id: m.id,
                                        title: m.title,
                                        content: m.content
                                    }}
                                >
                                    {m.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    )
}
