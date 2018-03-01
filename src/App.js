import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InvadersTwo from './Game/InvadersTwo';

class App extends Component {
  render() {
    InvadersTwo();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
