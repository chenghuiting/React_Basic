import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"

export default [
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            { path: 'news', element: <News /> },
            {
                path: 'message', element: <Message />,
                // 路由传递 params 参数
                // children: [
                //     { path: 'detail/:id/:title/:content', element: <Detail /> },
                // ]

                // 路由传递 Search参数 和 state参数 都不需要占位（Search参数、state参数 不需要声明接收）
                children: [
                    { path: 'detail', element: <Detail /> },
                ]
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    },
]