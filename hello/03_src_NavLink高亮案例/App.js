import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  function computedClassName({ isActive }) {
    return isActive ? 'list-group-item atguigu' : 'list-group-item'
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            {/* V5版本加 activeClassName="atguigu" ，实现选中高亮  */}
            <NavLink
              // activeClassName="atguigu"
              //className={(a) => { console.log('666', a); }} //666 {isActive: true}
              // { isActive }是将 isActive 解构出来，
              //className={({ isActive }) => { return isActive ? 'list-group-item atguigu' : 'list-group-item' }}
              className={({ isActive }) => isActive ? 'list-group-item atguigu' : 'list-group-item'} //箭头函数简写
              to="/about"
            >
              About
            </NavLink>
            {/* 可以将以上样式写成一个函数，然后在需要的地方直接复用即可 */}
            <NavLink className={computedClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
                {/* Navigate 相当于5版本里的 Redirect，Navigate 只要渲染就会引起视图的切换 */}
                <Route path='/' element={<Navigate to='/about' replace={true} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
