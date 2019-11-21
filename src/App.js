import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Bar from './components/headerBar/HeaderBar';
import Carousel from './components/carousel/carousel';

class App extends Component {
   constructor(props) {
       super(props)
   }
    
    HideOnClick = () => {
        console.log("text");
    }
    
    
    render() {
  return (
    <div className="App">
    <Bar />
    
    
    <Menu />
      
      <Carousel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
    }
}

export default App;
