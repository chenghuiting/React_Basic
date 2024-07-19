// 复习：redux使用connect的写法；
import React, { memo, } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo((props) => {
  const { counter, addNumber, subNumber } = props

  function addNumberHandle(num, isAdd = true) { // isAdd默认值为true
    if (isAdd) {
      addNumber(num)
    } else {
      console.log(isAdd);
      subNumber(num)
    }
  }

  return (
    <div>
      <h1>当前计数：{counter}</h1>
      {/* isAdd默认值为true，所以+时不用传；-时传false */}
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(5)}>+5</button>
      <button onClick={e => addNumberHandle(1, false)}>-1</button>
      <button onClick={e => addNumberHandle(5, false)}>-5</button>
    </div>
  )
})

const mapStateToProps = (state) => ({
  counter: state.counter.count
})
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  },
  subNumber(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

