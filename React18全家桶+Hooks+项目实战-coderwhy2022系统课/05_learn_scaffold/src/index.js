// import React, { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

root.render(
    <ThemeProvider theme={{ color: "purple", size: "50px" }}>
        <App />
    </ThemeProvider>
);

reportWebVitals();
