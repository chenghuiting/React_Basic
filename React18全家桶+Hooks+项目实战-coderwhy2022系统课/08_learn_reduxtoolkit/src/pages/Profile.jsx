import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/features/counter'

export class Profile extends PureComponent {

  subNum(num) {
    this.props.subNumber(num)
  }

  render() {
    return (
      <div>
        <h2>Profile counter:{this.props.counter}</h2>
        <div>
          <button onClick={() => this.subNum(2)}>-2</button>
          <button onClick={() => this.subNum(5)}>-5</button>
          <button onClick={() => this.subNum(8)}>-8</button>
        </div>
        <div>
          <h2>banners：</h2>
          <ul>
            {
              this.props.banners.map((item, index) => <li key={index}>{item.title}</li>)
            }
          </ul>
        </div>
        <div>
          <h2>recomments：</h2>
          <ul>
            {
              this.props.recomments.map((item, index) => <li key={index}>{item.title}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recomments: state.home.recomments,
})
const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumber(num))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)