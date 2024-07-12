// useLayoutEffect（了解即可，官方不推荐使用） 和 useEffect
import React, { memo, useState, useLayoutEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  // 使用useEffect切换屏幕会有闪烁现象，先显示0，再显示useEffect中设置的数据；
  // useEffect(() => {
  //   console.log("useEffect");
  //   if (counter === 0) {
  //     setCounter(Math.random() + 99)
  //   }
  // }, [counter])

  // 使用useLayoutEffect切换屏幕不会有闪烁现象；
  useLayoutEffect(() => {
    console.log("useEffect");
    if (counter === 0) {
      setCounter(Math.random() + 99)
    }
  }, [counter])

  return (
    <div>
      <h2>counter:{counter}</h2>
      <button onClick={e => setCounter(0)}>DOM操作</button>
    </div>
  )
})

export default App

