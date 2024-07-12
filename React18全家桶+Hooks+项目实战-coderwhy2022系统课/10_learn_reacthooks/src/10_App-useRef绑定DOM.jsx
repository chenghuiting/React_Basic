// useRef绑定DOM
import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function showTitleDom() {
    console.log(titleRef.current);// current保存的是当前的dom；

    // 点击按钮时让input获取焦点；
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>hello wrold</h2>
      <input type="text" ref={inputRef} />
      <button onClick={showTitleDom}>查看title的DOM</button>
    </div>
  )
})

export default App

