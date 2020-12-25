import React, { Component } from 'react';
import '@/assets/css/default.scss'
// import 'antd/dist/antd.css';
// import 'braft-editor/dist/index.css'
import './App.scss';
import './media.scss';
// import { ipcRenderer } from 'electron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {

	render () {
	  return (
			<Router>
				<div className="container main-content-wrapper">
		    	<Switch>
						<Route path="/123">
							<div>这里是123</div>
		        </Route>
		        <Route path="/">
							<div>App
								<Link to="/123">goto 123</Link>
								{/* <button onClick={() => ipcRenderer.send('getList', 'list args')}>click</button> */}
							</div>
		        </Route>
		        
		        <Route path="*">
		          404
		        </Route>
		      </Switch>
				</div>
	    </Router>
	  	
	  );
	}
}
