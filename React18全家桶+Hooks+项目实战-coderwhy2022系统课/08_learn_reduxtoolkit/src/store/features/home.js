import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// 第二个参数是store，从store中解构出 dispatch 和 getState；
export const fatchHomeMultidataAction = createAsyncThunk('fetch/homemultidata', async (extraInfo, { dispatch, getState }) => {
    console.log(extraInfo);// home.jsx组件传过来的对象 {name: 'why', age: 19}

    // 将网络请求到的数据塞到state中 方法二：直接调用dispatch；
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')// 发送网络请求，获取数据；
    // 取出数据，并且在此处直接dispatch操作；
    const banners = res.data.data.banner.list;
    const recomments = res.data.data.recommend.list;
    dispatch(changeBanners(banners))
    dispatch(changeRecomments(recomments))

    // return res
    /*
    直接 return res 会报错，原因是 axios 返回的结果因为包含其他一些信息，做不了序列化，需要 return res.data
    报错信息：
        VM2415:6 A non-serializable value was detected in an action, in the path: `payload.headers`. Value: AxiosHeaders {content-length: '4605', content-type: 'application/json'} 
        Take a look at the logic that dispatched this action:  {type: 'fetch/homemultidata/fulfilled', payload: {…}, meta: {…}} 
        (See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants) 
        (To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)
    */
    return res.data // 返回结果，那么action状态会变成 fulfilled 状态；
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        banners: [],
        recomments: [],
    },
    reducers: {
        changeBanners(state, { payload }) {
            state.banners = payload
        },
        changeRecomments(state, { payload }) {
            state.recomments = payload
        },
    },
    // 将网络请求到的数据塞到state中 方法一：有异步操作需要监听其状态时使用extraReducers；
    /*
     The object notation for `createSlice.extraReducers` has been removed.
     Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice 
     at buildReducer (createSlice.ts:421:1)
    */
    extraReducers: builder => {
        // 现在写法变了
        // builder.addCase(fatchHomeMultidataAction.pending, (state, action) => {
        //     console.log('pending');
        // })
        // builder.addCase(fatchHomeMultidataAction.fulfilled, (state, { payload }) => { // 从action中解构出payload
        //     state.banners = payload.data.banner.list;
        //     state.recomments = payload.data.recommend.list;
        // })
        // builder.addCase(fatchHomeMultidataAction.rejected, (state, action) => {
        //     console.log('rejected');
        // })

        // 也可以用链式的写法
        // builder.addCase(fatchHomeMultidataAction.pending, (state, action) => {
        //     console.log('pending');
        // }).addCase(fatchHomeMultidataAction.fulfilled, (state, { payload }) => { // 从action中解构出payload
        //     state.banners = payload.data.banner.list;
        //     state.recomments = payload.data.recommend.list;
        // }).addCase(fatchHomeMultidataAction.rejected, (state, action) => {
        //     console.log('rejected');
        // })

        // 计算属性名
        // [fatchHomeMultidataAction.pending](state, action) {
        //     console.log('pending');
        // },
        // [fatchHomeMultidataAction.fulfilled](state, action) {
        //     console.log('fulfilled');
        // },
        // [fatchHomeMultidataAction.rejected](state, action) {
        //     console.log('rejected');
        // },
    }
})
export const { changeBanners, changeRecomments } = homeSlice.actions
export default homeSlice.reducer