import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';//css库提供的管理主题的方法

import App from './App';
import 'normalize.css';
import './assets/css/index.less';
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 开启了严格模式，所有的生命周期都会执行两次；
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<h3>loading...</h3>}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
