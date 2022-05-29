import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comment from './class';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Comment text="hello worldsdcsdcds" date="22/04/2022" author={{name: "Andrey", avatarUrl: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"}} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
