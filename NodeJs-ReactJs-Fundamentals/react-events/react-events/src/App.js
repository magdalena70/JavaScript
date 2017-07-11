import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/common/PrivateRoute'
import Navbar from './components/Navbar'
import RegisterPage from './components/users/RegisterPage'
import AccountPage from './components/users/AccountPage'
import LoginPage from './components/users/LoginPage'
import LogoutPage from './components/users/LogoutPage'

import CreateAuthorPage from './components/CreateAuthorPage'

import logo from './logo.svg'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React-Events</h2>
          <div className='App-nav'>
            <Navbar />
          </div>
        </div>
        <div className='App-main'>
          <Switch>
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />                        
            <PrivateRoute path='/account' component={AccountPage} />           
            <PrivateRoute path='/logout' component={LogoutPage} /> 
            <PrivateRoute path='/author/create' component={CreateAuthorPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
