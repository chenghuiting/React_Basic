import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContext, ThemeContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: 'aa', level: 100 }}>
      <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
        <App />
      </ThemeContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);