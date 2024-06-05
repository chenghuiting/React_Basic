/*
  将Category组件中网络请求的代码移到actioon中，使用 thunk 和 applyMiddleware；
*/

import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { fetchHomeMultidateAction } from '../store/actionCreators'

class Category extends PureComponent {

    componentDidMount() {
        this.props.fetchHomeMultidate()
    }

    render() {
        return (
            <div>
                <h2>Category Page</h2>
            </div>
        )
    }
}
// const mapStateToProps = (state) => ({
//     counter: state.counter
// })
const mapDispatchToProps = (dispatch) => ({
    fetchHomeMultidate() {
        dispatch(fetchHomeMultidateAction())
    }
})
// export default connect(mapStateToProps, mapDispatchToProps)(Category)
export default connect(null, mapDispatchToProps)(Category)