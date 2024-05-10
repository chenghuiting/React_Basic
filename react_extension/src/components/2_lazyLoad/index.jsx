// Suspense 
import React, { Component, lazy, Suspense } from 'react' // 引入 lazy 函数
import { Route, NavLink } from 'react-router-dom'
// import Home from './Home'
// import About from './About'

const About = lazy(() => { return import('./About') })
const Home = lazy(() => { return import('./Home') })

export default class Demo extends Component {
    render() {
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
                            <NavLink className="list-group-item" to="/about" >About</NavLink>
                            <NavLink className="list-group-item" to="/home" >Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 用 Suspense 包裹注册路由，fallback 是路由组件没有加载出来时展示的内容 */}
                                <Suspense fallback={<h1>Loading...加载中</h1>}>
                                    {/* 注册路由 */}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

