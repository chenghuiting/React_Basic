import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { UserContext, ThemeContext } from './context';
import { UserContext, TokenContext } from './context';

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
        <App />
      </TokenContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);