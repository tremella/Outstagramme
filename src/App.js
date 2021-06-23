import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostComponent from './PostComponent'

function Appl() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='boilerplate'>
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>

      <PostComponent displaytext="I'm the displaytext value"/>
      
    </div>
  );
}

export default Appl;
