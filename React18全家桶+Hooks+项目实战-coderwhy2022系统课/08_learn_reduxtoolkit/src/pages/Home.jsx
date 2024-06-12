import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'

class Home extends PureComponent {

  addNum(num) {
    this.props.addNum(num)
  }

  render() {
    return (
      <div>
        <h2>Home counter:{this.props.counter}</h2>
        <div>
          <button onClick={() => this.addNum(2)}>+2</button>
          <button onClick={() => this.addNum(5)}>+5</button>
          <button onClick={() => this.addNum(8)}>+8</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})
const mapDispatchToProps = (dispatch) => ({
  addNum(num) {
    dispatch(addNumber(num))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)