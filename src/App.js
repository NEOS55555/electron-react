import React, { Component } from 'react';
import '@/assets/css/default.scss'
// import 'antd/dist/antd.css';
// import 'braft-editor/dist/index.css'
import './App.scss';
import './media.scss';
import { ipcRenderer } from 'electron'



export default class App extends Component {

	render () {
	  return (
	  	<div>App
				<button onClick={() => ipcRenderer.send('getList', 'list args')}>click</button>
			</div>
	  );
	}
}
