import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import PostComponent from './PostComponent'
import CommentComponent from './CommentComponent'
import PhotoComponent from './PhotoComponent'

export default class InstaComponent extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">

        <header className="App-header">
          <div id='boilerplate'>
            <img src={logo} className="App-logo" alt="logo" />
            <p> Edit <code>src/InstaComponent.js</code> and save to reload. </p>
            <a className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </header>

        <div className="signup">
          <h3> this should be visible BEFORE signup OR login</h3>
          <form>
            <input type='text' id='first_name' placeholder='first name'></input> <br />
            <input type='text' id='email' placeholder='email address'></input> <br />
            <input type='text' id='password' placeholder='password'></input> <br />
            <input type='submit' value='sign up!'></input>
          </form>
        </div>

        <div className="login">
          <h3> this should be visible BEFORE login</h3>
          <form>
          <input type='text' id='email' placeholder='email address'></input> <br />
          <input type='text' id='password' placeholder='password'></input> <br />
          <input type='submit' value='log in!'></input>
          </form>
        </div>

        <div className="feed">
        <h3> this should be visible AFTER login </h3>
          <PostComponent
          caption="I'm a caption [prop]"
          photo=<PhotoComponent source='default.png' />
          comments=<CommentComponent content="I'm a comment component. I belong to this photo! ^ "/>
          />
        </div>


      </div>
    )
  }
}
