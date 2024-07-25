// useDeferredValue的使用
import React, { memo, useState, useDeferredValue } from 'react'
import namesArray from './namesArray'

const App = memo((props) => {
  const [showNames, setShowNames] = useState(namesArray)
  const deferredValue = useDeferredValue(showNames)

  // 案例：输入框中输入内容，下面列表展示携带输入内容的姓名；
  function valueChangeHandle(event) {
    const keyWrod = event.target.value;
    const filterShowNames = namesArray.filter(item => item.includes(keyWrod))
    setShowNames(filterShowNames)
  }

  return (
    <div>
      {/* <input type="text" onInput={e => valueChangeHandle(e)} /> */}
      <input type="text" onInput={valueChangeHandle} />
      {/* 数据正在加载时展示提示内容 */}
      <h2>用户名列表</h2>
      <ul>
        {
          deferredValue.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App

