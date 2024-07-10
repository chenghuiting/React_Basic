// useCallback记忆值的性能；修改message时HYHome不会被重新渲染；
import React, { memo, useCallback, useReducer, useRef, useState } from 'react'

// 当props中的属性发生改变时，组件本身就会被重新渲染；
const HYHome = memo(function (props) {
  const { increment } = props
  console.log("HYHome被重新渲染");
  return (
    <div>
      <button onClick={increment}>iincrement+1</button>
    </div>
  )
})

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('hello')

  /*
  useCallback性能优化的点：
    1、当需要将一个函数传递给子组件时，最好使用useCallback进行优化，将优化之后的函数传递给子组件，子组件不会被重新渲染；
    2、
  */
  // 闭包陷阱：useCallback；这种写法修改message时HYHome不会被重新渲染；
  // const increment = useCallback(function foo() {
  //   console.log('increment');
  //   setCounter(counter + 1)
  // }, [counter])

  /*
  进一步优化：当counter发生改变时，也使用同一个函数；
    做法一：将counter依赖移除掉，缺点：闭包陷阱；
    做法二：useRef，在组件多次渲染时，返回的是同一个值；所以不会重新渲染；
  */
  const counterRef = useRef()
  counterRef.current = counter
  const increment = useCallback(function foo() {
    console.log('increment');
    setCounter(counterRef.current + 1)
  }, [counter])

  // 普通的函数，修改message时HYHome也会被重新渲染；
  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={increment}>+1</button>
      <HYHome increment={increment} />

      <h2>message：{message}</h2>
      <button onClick={() => setMessage('你好')}>修改message</button>
    </div>
  )
})

export default App

