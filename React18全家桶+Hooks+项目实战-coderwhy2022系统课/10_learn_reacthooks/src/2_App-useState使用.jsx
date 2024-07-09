import React, { memo, useState } from 'react'

const App = memo(() => {
  const [message, setMessage] = useState('hello world')

  function changeMessage() {
    setMessage('你好！')
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App
