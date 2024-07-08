import React from 'react'
import { Route, Routes, Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import Order from './pages/Order'
import Category from './pages/Category'
import HomeSongMenu from './pages/HomeSongMenu'
import Detail from './pages/Detail'
import User from './pages/User'

// useNavigate 这个hooks只能在函数式组件中去使用；如果想要在类组件中使用可以使用高阶函数的写法；
export default function App(props) {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path)
  }

  return (
    <div className='app'>
      <div className='header'>
        Header
        <div>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="./login">登录</Link>
          {/* <Link to="./detail">详情</Link> */}
          <Link to="./user?name=why&age=18">用户</Link>

          <button onClick={e => navigateTo('/category')}>分类</button>
          <span onClick={e => navigateTo('/order')}>订单</span>

          {/* 比较繁琐，不推荐使用 */}
          <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>home</NavLink>
        </div>
      </div>
      <div className='content'>
        {/* 映射关系：path => Component */}
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />}>
            <Route path='/home/recommend' element={<HomeRecommend />} />
            <Route path='/home/homeranking' element={<HomeRanking />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/category' element={<Category />} />
          <Route path='/home/songmenu' element={<HomeSongMenu />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/user' element={<User />} />

          {/* * 表示通配 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className='footer'>
        footer
      </div>
    </div>
  )
}
