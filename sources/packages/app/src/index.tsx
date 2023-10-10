import React from 'react';
import ReactDOM from 'react-dom/client';
import { crafterConf } from '@craftercms/classes';
// @ts-ignore
import cookies from 'js-cookie';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BASE_URL } from './constants';

let siteName = document.querySelector('#site')?.innerHTML;
/*eslint no-template-curly-in-string: "off"*/
if (siteName === undefined || siteName === '${siteName}' || siteName === '') {
  siteName = cookies.get('crafterSite') ?? 'react-app';
}

crafterConf.configure({
  baseUrl: BASE_URL,
  site: siteName,
  cors: 'cors'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
