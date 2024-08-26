import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'normalize.css';
import './assets/css/index.less';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 开启了严格模式，所有的生命周期都会执行两次；
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<h3>loading...</h3>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
