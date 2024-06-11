/*
  在Category中请求到数据，并共享到store中，供其他组件使用；（这种做法不合理，后续会优化）
*/

import React, { PureComponent } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { renewBannerAction, renewRecommendsAction } from '../store/actionCreators'

class Category extends PureComponent {

    componentDidMount() {
        axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
            // console.log(res.data);  // 严格模式下结果会打印两次；
            const banners = res.data.data.banner.list;
            const recommends = res.data.data.recommend.list;
            // console.log(banners, recommends);
            this.props.renewBanner(banners)
            this.props.renewRecommends(recommends)
        })
    }

    render() {
        return (
            <div>
                <h2>Category Page</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
}
const mapDispatchToProps = (dispatch) => (
    {
        // dispatch()是一个同步操作
        renewBanner: banners => dispatch(renewBannerAction(banners)),
        renewRecommends: recommends => dispatch(renewRecommendsAction(recommends))
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Category)