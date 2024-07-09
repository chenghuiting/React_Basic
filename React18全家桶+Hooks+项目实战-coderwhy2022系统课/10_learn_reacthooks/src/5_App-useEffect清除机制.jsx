// effect清除机制
import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  // 负责告诉react，在执行完当前组件渲染之后要执行的副作用代码；
  useEffect(() => {
    // 当前传入的回调函数会在组件渲染完成后，自动执行；
    // 副作用的操作：网络请求/DOM操作（修改标题）/事件监听，统统放到useEffect中；
    // 会在其他基本的东西都执行完成后再执行【副作用的操作】；

    // 返回值：回调函数=》组件被重新渲染或者组件卸载的时候执行；
    return () => {
      // 在该函数中进行取消监听的操作；
    }
  })

  return (
    <div>
      <h2>counter：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>修改数据</button>
    </div>
  )
})

export default App

