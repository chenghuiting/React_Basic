// useMemo的使用
import React, { memo, useMemo, useState } from 'react'

const HelloWorld = memo(function (props) {
  console.log("HelloWorld被渲染");
  return <h2>Hello Wrold!</h2>
})

function calcNumTotal(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  let result = useMemo(() => {
    return calcNumTotal(30)
  },[])

  const info = useMemo(() => ({ name: 'why', age: 18 }), [])

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <HelloWorld result={result} info={info} />
    </div>
  )
})

export default App

