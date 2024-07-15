// 自定义hooks：监听窗口滚动位置；
import React, { memo, } from 'react'
import useScrollPosition from './hooks/useScrollPosition'
import "./style.css"

const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()
  return <h1>HOME PAGE:{scrollX}-{scrollY}</h1>
})

const About = memo(() => {

  return <h1>ABOUT PAGE</h1>
})

const App = memo(() => {
  return (
    <div className='app'>
      <h1>APP</h1>
      <Home />
      <About />
    </div>
  )
})

export default App

