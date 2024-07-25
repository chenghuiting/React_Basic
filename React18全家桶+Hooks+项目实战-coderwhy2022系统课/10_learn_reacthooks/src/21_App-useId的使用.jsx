// useId的使用（了解）
import React, { memo, useId, useState, } from 'react'

const App = memo((props) => {
  const [count, setCount] = useState(0)
  const id = useId()
  console.log(id);

  return (
    <div>
      <h1>{id}</h1>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {/* 绑定唯一的同一个id，做hydration的时候不会出现mismatch的错误 */}
      <label htmlFor={id}>
        用户名：<input id={id} type='text' />
      </label>
    </div>
  )
})

export default App

