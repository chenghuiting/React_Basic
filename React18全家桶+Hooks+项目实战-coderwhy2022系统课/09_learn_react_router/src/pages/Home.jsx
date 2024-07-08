// 类组件拿不到 useNavigate 钩子，可以使用高阶组件的写法拿到；

import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from '../hoc/with_router'

class Home extends PureComponent {

  navigateTo(path) {
    const { navigate } = this.props.router;
    navigate(path)
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <div>
          <Link to='/home/recommend'>推荐</Link>
          <Link to='/home/homeranking'>排行榜</Link>
          <button onClick={e => this.navigateTo('/home/songmenu')}>歌单</button>
        </div>

        {/* 占位组件 Outlet放到哪个位置，映射出来的组件就会放到哪个位置 */}
        <Outlet />
      </div>
    )
  }
}

// 高阶组件 router5里面有withRouter可以直接用，router6里面没有；（将代码抽到专门的高阶组件文件中）
// function withRouter(WrapperComponent) {
//   return function (props) {
//     const navigate = useNavigate()
//     const router = { navigate }
//     return <WrapperComponent {...props} router={router} />
//   }
// }

export default withRouter(Home)