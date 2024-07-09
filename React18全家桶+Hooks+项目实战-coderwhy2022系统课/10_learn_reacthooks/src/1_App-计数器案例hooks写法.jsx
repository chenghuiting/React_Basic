import React, { memo, useState } from 'react'

const App = memo(() => {
  // useState 返回一个数组；
  // const arr = useState(0)

  // 从数组中解构出 counter, setCounter
  const [counter, setCounter] = useState(0)


  return (
    <div>
      {/* <h2>当前计数：{arr[0]}</h2> */}
      {/* arr[1] 是一个函数 */}
      {/* <button onClick={e => arr[1](100)}>+1</button>
      <button onClick={e => arr[1](-100)}>-1</button> */}

      <h2>当前计数：{counter}</h2>
      {/* 在原来的counter的基础上+1、-1 */}
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
    </div>
  )
})

export default App
