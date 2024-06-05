import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';//context.provider
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 通过Provide给整个应用程序提供一个store，就是我们创建的store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);