import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'
import { fatchHomeMultidataAction } from '../store/features/home'

class Home extends PureComponent {

  componentDidMount() {
    this.props.fetchHomeMultidata()
    console.log(this.props.fetchHomeMultidata());
  }

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
  },
  fetchHomeMultidata() {
    dispatch(fatchHomeMultidataAction({ name: 'why', age: 19 }))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)