import React from 'react'
import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import routes from './routes'

export default function App() {
  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes)

  // useInRouterContext() 返回值是一个布尔值
  // true，表示处于路由的上下文环境中，即目前所处的组件被<BrowserRouter>包裹；
  // 只要是App的子组件，都处于路由的上下文环境中；
  console.log(useInRouterContext()); 

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className='list-group-item' to="/about">About</NavLink>
            <NavLink className='list-group-item' to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
