// useImperativeHandle的使用：在父组件中绑定子组件中的某个元素，暴露部分功能
import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'

// 需求：只让它获取焦点，不能修改value；
// ref绑定在组件上要用forwardRef包裹子组件从第二个参数ref中拿到；
const HelloWorld = memo(forwardRef((props, ref) => {
  const inpRef = useRef()

  // 子组件对父组件传入的ref进行处理；
  useImperativeHandle(ref, () => {
    return {
      focus() {
        console.log("focus");
        inpRef.current.focus()
      },
      setValue(value) {
        inpRef.current.value = value
      }
    }
  })


  // return <input type='text' ref={ref} />
  return <input type='text' ref={inpRef} />
}))

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function handleDOM() {
    console.log(titleRef.current);

    inputRef.current.focus();
    inputRef.current.value = '';

    // 使用useImperativeHandle后修改value；
    inputRef.current.setValue('哈哈哈哈')
  }

  return (
    <div>
      <h2 ref={titleRef}>hello wrold</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={handleDOM}>DOM操作</button>
    </div>
  )
})

export default App

