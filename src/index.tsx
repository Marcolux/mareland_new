import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as MainRouter } from 'react-router-dom'

import './style/index.scss';
import './style/settings/settings.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
// const base = process.env.NODE_ENV === "production" ? "/mareland-react" : "/"
const base = "/"
root.render(
  <React.StrictMode>
    <MainRouter basename={base}>
      <App />
    </MainRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
