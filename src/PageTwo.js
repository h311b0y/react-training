import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page2 from './Page2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('page2Root'));
root.render(
  <React.StrictMode>
    <Page2 library="React" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();