// Redux-RTK 工具包的介绍和基本使用
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App Couter:{this.props.counter}</h2>
        <div className='pages'>
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})


export default connect(mapStateToProps, null)(App)
