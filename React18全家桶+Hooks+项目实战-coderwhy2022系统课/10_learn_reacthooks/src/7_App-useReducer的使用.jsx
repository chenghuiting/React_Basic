// useReducer的使用
import React, { memo, useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 }
    case "decrement":
      return { ...state, counter: state.counter - 1 }
    case "add_number":
      return { ...state, counter: state.counter + action.num }
    case "sub_number":
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

const App = memo(() => {
  // const [counter, setCounter] = useState(0)

  const [state, dispatch] = useReducer(reducer, { counter: 0 })//第二个参数是初始化值；

  return (
    <div>
      {/* 1、使用useState */}
      {/* <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}

      {/* 2、使用useReducer */}
      <h2>当前计数：{state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "add_number", num: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "sub_number", num: 10 })}>-10</button>
    </div>
  )
})

export default App

