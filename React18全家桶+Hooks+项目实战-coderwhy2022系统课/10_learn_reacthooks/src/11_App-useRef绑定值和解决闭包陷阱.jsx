// useRef绑定值和解决闭包陷阱；
import React, { memo, useCallback, useRef, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  const titleRef = useRef()

  // 通过useRef解决闭包陷阱
  const counterRef = useRef()
  counterRef.current = counter
  const increment = useCallback(() => {
    setCounter(counterRef.current + 1)
  }, [])

  return (
    <div>
      <h2 ref={titleRef}>hello wrold:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App

