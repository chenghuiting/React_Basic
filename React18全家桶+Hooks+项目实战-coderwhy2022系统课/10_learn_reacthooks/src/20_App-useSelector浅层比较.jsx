// useSelector浅层比较；使用useSelector时传入第二个参数shallowEqual，进行浅层比较；
import React, { memo, } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addNumberAction, subNumberAction, changeMessageAction } from './store/modules/counter'

// memo高阶组件包裹起来的组件有对应的特点：只有props发生改变时，才会重新渲染；
const Home = memo((props) => {
  // 默认情况下useSelector监听的是整个state，所以哪怕只修改了count，Home子组件也会被重新渲染；
  const { message } = useSelector((state) => ({
    message: state.counter.message
  }), shallowEqual)
  const dispatch = useDispatch()

  function changeMessageHandle() {
    console.log(11);
    dispatch(changeMessageAction('你好'))
  }

  console.log('Home render');
  return (
    <div>
      <h2>Home Page：{message}</h2>
      <button onClick={e => changeMessageHandle()}>点击</button>
    </div>
  )
})

const App = memo((props) => {
  // 1、使用useSelector将redux中的store的数据映射到组件内；
  const { count } = useSelector((state) => ({
    count: state.counter.count,

  }), shallowEqual)

  // 2、使用useDispatch拿到dispatch,直接派发action；
  const dispatch = useDispatch()

  function addNumberHandle(num, isAdd = true) { // isAdd默认值为true
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  console.log('App render');
  return (
    <div>
      <h1>当前计数：{count}</h1>
      {/* isAdd默认值为true，所以+时不用传；-时传false */}
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(5)}>+5</button>
      <button onClick={e => addNumberHandle(1, false)}>-1</button>
      <button onClick={e => addNumberHandle(5, false)}>-5</button>
      <Home />
    </div>
  )
})

export default App

