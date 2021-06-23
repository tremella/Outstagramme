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

      <PostComponent
      caption="I'm a caption [prop]"
      photo=<PhotoComponent />
      comments=<CommentComponent content="I'm a comment component. I belong to this photo! ^ "/>
      />

    </div>
  );
}

export default App;
