// useContext的使用
import React, { memo, useContext } from 'react'
import { UserContext, ThemeContext } from './context'

const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2>{user.name}-{user.level}</h2>
      <h2>{theme.color}-{theme.size}</h2>
    </div>
  )
})

export default App

