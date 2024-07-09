import React from "react"
import { Navigate } from "react-router-dom"

// 同步加载，没有做分包处理，打包的时候会全部打包到同一个js文件中；
import Home from '../pages/Home'
// import About from '../pages/About'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import HomeRecommend from '../pages/HomeRecommend'
import HomeRanking from '../pages/HomeRanking'
import Order from '../pages/Order'
import Category from '../pages/Category'
import HomeSongMenu from '../pages/HomeSongMenu'
import Detail from '../pages/Detail'
import User from '../pages/User'

// 路由的懒加载，可以做一个分包处理
const About = React.lazy(() => import('../pages/About'))

const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '/home',
                element: <Navigate to='/home/recommend' />
            },
            {
                path: '/home/recommend',
                element: <HomeRecommend />
            },
            {
                path: '/home/homeranking',
                element: <HomeRanking />,
            },
        ]
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/order',
        element: <Order />,
    },
    {
        path: '/category',
        element: <Category />,
    },
    {
        path: '/home/songmenu',
        element: <HomeSongMenu />,
    },
    {
        path: '/detail/:id',
        element: <Detail />,
    },
    {
        path: '/user',
        element: <User />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]

export default routes