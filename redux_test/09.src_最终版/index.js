import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'
import { Provider } from 'react-redux'

// 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
ReactDOM.render(
    /*
        此处需要用 Provider 包裹App，目的是让App所有的后代容器组件都能接收到 store；
    */ 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
