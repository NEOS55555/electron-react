import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@/App';
// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import store from '@/store/reducer'
console.log(process.env)
ReactDOM.render(
	  <Provider store={store}>
    	<App />
	  </Provider>, 
  document.getElementById('root'));
/* 
ReactDOM.render(
	<ConfigProvider locale={zhCN}>
	  <Provider store={store}>
    	<App />
	  </Provider>

  </ConfigProvider>, 
  document.getElementById('root')); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
