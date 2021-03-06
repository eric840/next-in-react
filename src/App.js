import React from 'react';
import "./App.css"
import HomePage from './pages/HomePage.js';
import {Route, Switch} from "react-router-dom"
import UserProfile from './pages/UserProfile';
import NavBar from './components/NavBar'
import Modal from './containers/Modal'

function App() {
  return(
	    <Modal>
	      <NavBar />
	      <Switch>
	        <Route exact path="/" component={HomePage}/>
	        <Route path="/users/:id" component={UserProfile} />
	      </Switch>
	    </Modal>
  )
}

export default App;
