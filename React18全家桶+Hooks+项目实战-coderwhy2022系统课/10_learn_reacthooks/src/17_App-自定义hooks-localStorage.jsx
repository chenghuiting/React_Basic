// 自定义hooks：通过key，直接从localStorage中获取一个数据；
import React, { memo, } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {
  const [token, setToken] = useLocalStorage("token")
  function setTokenHadel() {
    setToken('kobe')
  }

  return (
    <div>
      <h1>App Root Component:{token}</h1>
      <button onClick={setTokenHadel}>点击</button>
    </div>
  )
})

export default App

