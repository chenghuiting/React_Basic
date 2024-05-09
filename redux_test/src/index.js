import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'
import { Provider } from 'react-redux'

// 如果用了react-redux就不用自己监测，容器组件自己具有监测的能力；
ReactDOM.render(
    //  此处需要用Provider包裹App,目的是让App所有的后代容器组件都能接收到store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
