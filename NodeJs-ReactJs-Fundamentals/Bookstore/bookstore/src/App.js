import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Route'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Header />
        </div>
        <div className='App-main'>
          <Routes />
        </div>
        <div className='App-footer'>
          <Footer /> 
        </div>    
      </div>
    );
  }
}

export default App
