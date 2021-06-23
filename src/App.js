import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostComponent from './PostComponent'
import CommentComponent from './CommentComponent'
import PhotoComponent from './PhotoComponent'

function App() {
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

      <div className="login">
        <p> this should be visible BEFORE login</p>
      </div>

      <div className="feed">
      <p> this should be visible AFTER login </p>
        <PostComponent
        caption="I'm a caption [prop]"
        photo=<PhotoComponent source='default.png' />
        comments=<CommentComponent content="I'm a comment component. I belong to this photo! ^ "/>
        />
      </div>


    </div>
  );
}

export default App;
