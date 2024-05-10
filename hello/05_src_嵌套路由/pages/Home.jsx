import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        {/* V6版本前面不用带着父级路径，注意：不用带 / */}
                        <NavLink className="list-group-item" to='news'>News</NavLink>
                    </li>
                    <li>
                        {/* 在父级路由链接里加上 end 属性，选中该子级路由时，其父级不会有高亮效果 */}
                        <NavLink className="list-group-item" to='message'>Message</NavLink>
                    </li>
                </ul>
                {/* 指定路由组件呈现的位置 */}
                <Outlet />
            </div>
        </div>
    )
}
