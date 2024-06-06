import axios from 'axios'

export const increaceAction = (count) => ({
    type: "increace",
    count,
})

export const decreaceAction = (count) => ({
    type: "decreace",
    count,
})

export const renewBannerAction = (bunnerList) => ({
    type: 'banners',
    bunnerList,
})

export const renewRecommendsAction = (recommendList) => ({
    type: 'recommends',
    recommendList,
})

export const fetchHomeMultidateAction = () => {
    // 如果是一个普通的action，那么我们这里需要返回action对象；
    // 问题：对象中是不能直接拿到从服务器请求的异步数据的；
    // return {}

    // 如果返回的是一个函数，那么redux是不支持的；需要在store.js中对store进行增强；
    // function foo(dispatch, getState) {
    //     // console.log(getState().counter);// 通过getState().counter可以拿到store里面的状态

    //     axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
    //         const banners = res.data.data.banner.list;
    //         const recommends = res.data.data.recommend.list;
    //         dispatch(renewBannerAction(banners))
    //         dispatch(renewRecommendsAction(recommends))
    //     })
    // }
    // return foo

    // 可以简写成直接return一个函数
    // return function (dispatch, getState) {
    //     // console.log(getState().counter);// 通过getState().counter可以拿到store里面的状态
    //     axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
    //         const banners = res.data.data.banner.list;
    //         const recommends = res.data.data.recommend.list;
    //         dispatch(renewBannerAction(banners))
    //         dispatch(renewRecommendsAction(recommends))
    //     })
    // }

    // 还可以写成箭头函数的形式
    return (dispatch, getState) => {
        // console.log(getState().counter);// 通过getState().counter可以拿到store里面的状态
        axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
            const banners = res.data.data.banner.list;
            const recommends = res.data.data.recommend.list;
            dispatch(renewBannerAction(banners))
            dispatch(renewRecommendsAction(recommends))
        })
    }
}