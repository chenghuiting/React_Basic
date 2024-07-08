import React, { PureComponent } from 'react'
import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import Order from './pages/Order'
import Category from './pages/Category'

export default class App extends PureComponent {

  navigateTo(path) {
    console.log(path);
  }
  render() {
    return (
      <div className='app'>
        <div className='header'>
          Header
          <div>
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="./login">登录</Link>

            <button onClick={e => this.navigateTo('/category')}>分类</button>
            <span onClick={e => this.navigateTo('/order')}>订单</span>

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
