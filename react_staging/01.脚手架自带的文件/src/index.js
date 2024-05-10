// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import './index.css';
// 引入APP组件
import App from './App';
import reportWebVitals from './reportWebVitals';

// 渲染APP到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
