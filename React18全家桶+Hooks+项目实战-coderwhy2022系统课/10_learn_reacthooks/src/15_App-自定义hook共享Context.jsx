// 自定义hooks：打印生命周期；
import React, { memo, } from 'react'
import { useUserToken } from './hooks'

const Home = memo(() => {
  const [user, token] = useUserToken()
  return <h1>{user.name}-{token}</h1>
})

const About = memo(() => {
  const [user, token] = useUserToken()
  return <h1>{user.name}-{token}</h1>
})

const App = memo(() => {
  const [user, token] = useUserToken()
  return (
    <div>
      <h1>{user.name}-{token}</h1>
      <Home />
      <About />
    </div>
  )
})

export default App

