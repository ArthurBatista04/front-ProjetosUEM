import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navBar.js'
import Main from './Components/main.js'

class App extends Component {
  

  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
