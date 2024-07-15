// 自定义hooks：打印生命周期；
import React, { memo, useEffect, useState } from 'react'

function useLogLife(cName) {
  useEffect(() => {
    console.log("组件被创建");

    return () => {
      console.log(cName, "组件被销毁");
    }
  }, [cName])
}

const Home = memo(() => {
  useLogLife("home")

  return <h1>Home Page</h1>
})

const About = memo(() => {
  useLogLife("about")

  return <h1>About Page</h1>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  useLogLife("app")

  return (
    <div>
      <h2>App Root Component</h2>
      <button onClick={e => setIsShow(!isShow)}>DOM操作</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  )
})

export default App

