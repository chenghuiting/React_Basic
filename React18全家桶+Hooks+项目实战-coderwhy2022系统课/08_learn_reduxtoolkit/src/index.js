import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import { StoreContext } from './hoc'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </Provider>
  </React.StrictMode>
);
