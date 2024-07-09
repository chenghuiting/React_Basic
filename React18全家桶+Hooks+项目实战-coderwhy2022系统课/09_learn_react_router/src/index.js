import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* 懒加载组件没有加载出来时展示 fallback 定义的组件 */}
      <Suspense fallback={<h3>loading...</h3>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);