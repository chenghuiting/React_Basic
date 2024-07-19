import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import App from './App';
// import { UserContext, ThemeContext } from './context';
import { UserContext, TokenContext } from './context';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <UserContext.Provider value={{ name: 'aa', level: 100 }}>
//       <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
//         <App />
//       </ThemeContext.Provider>
//     </UserContext.Provider>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: 'aa', level: 100 }}>
      <TokenContext.Provider value={'3242323'}>
        <Provider store={store}>
          <App />
        </Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);