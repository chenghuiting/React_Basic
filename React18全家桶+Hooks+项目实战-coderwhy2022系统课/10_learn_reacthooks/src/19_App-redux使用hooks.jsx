// useSelector, useDispatch的使用；
import React, { memo, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo((props) => {
  // 1、使用useSelector将redux中的store的数据映射到组件内；
  // const { count } = useSelector((state) => {
  //   return {
  //     count: state.counter.count,
  //   }
  // })

  // 简写形式
  const { count } = useSelector((state) => ({
    count: state.counter.count,

  }))

  // 2、使用useDispatch拿到dispatch,直接派发action；
  const dispatch = useDispatch()

  function addNumberHandle(num, isAdd = true) { // isAdd默认值为true
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  return (
    <div>
      <h1>当前计数：{count}</h1>
      {/* isAdd默认值为true，所以+时不用传；-时传false */}
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(5)}>+5</button>
      <button onClick={e => addNumberHandle(1, false)}>-1</button>
      <button onClick={e => addNumberHandle(5, false)}>-5</button>
    </div>
  )
})

export default App

