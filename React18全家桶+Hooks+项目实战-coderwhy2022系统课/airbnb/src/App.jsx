import React, { memo } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>
        <Link to='/home'>主页</Link>
        <Link to='/detail'>详情页</Link>
        <Link to='/entire'>更多</Link>
      </div>
      {
        useRoutes(routes)
      }
      <div className='footer'>底部</div>
    </div>
  )
})

export default App
