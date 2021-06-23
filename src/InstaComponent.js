import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import PostComponent from './PostComponent'
import CommentComponent from './CommentComponent'
import PhotoComponent from './PhotoComponent'
import FeedComponent from './FeedComponent'
import loginPage from './loginPage'

export default class InstaComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleLoginSubmit(submitEvent) {
    console.log('login button pressed')
    submitEvent.preventDefault();
    this.setState({loggedIn: true})
  }

  render(){

    if (this.state.loggedIn == false) {
      return loginPage(this.handleLoginSubmit)

    } else {

      console.log('logged in')
      let post = <PostComponent
      caption="I'm a caption [prop]"
      photo=<PhotoComponent source='default.png' />
      comments=<CommentComponent content="I'm a comment component for this ^^^ "/>
      />
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

          <h3> this should be visible AFTER login </h3>

          <FeedComponent
          allPosts={[post, post]}
          />


        </div>
      )
    }
  }
}
