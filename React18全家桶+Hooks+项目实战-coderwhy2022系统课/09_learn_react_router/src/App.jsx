import React, { PureComponent } from 'react'
import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export default class App extends PureComponent {

  render() {
    return (
      <div className='app'>
        <div className='header'>
          Header
          <div>
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="./login">登录</Link>
            {/* 比较繁琐，不推荐使用 */}
            <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>home</NavLink>
          </div>
        </div>
        <div className='content'>
          {/* 映射关系：path => Component */}
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
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
}
