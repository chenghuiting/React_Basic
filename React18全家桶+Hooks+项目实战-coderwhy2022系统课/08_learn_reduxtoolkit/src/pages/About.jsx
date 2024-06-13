import React, { PureComponent } from 'react'
import { connect } from '../hoc/connect'
import { addNumber, subNumber } from '../store/features/counter'

class About extends PureComponent {
    render() {
        return (
            <div>
                <h2>About Counter: {this.props.counter}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    counter: state.counter.counter
})
const mapDispatchToProps = (dispatch) => ({
    addNumber(num) {
        dispatch(addNumber(num))
    },
    subNumber(num) {
        dispatch(subNumber(num))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(About)