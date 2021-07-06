import React, {Component} from 'react'
import './App.css';
import FeedComponent from './FeedComponent'
import LoginPageComponent from './loginPageComponent'
import loginPage from './loginPage'

export default class InstaComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
  }


  render(){

    if (this.state.loggedIn === false) {
      // render loginComponent, give it a link to signup page.
      return (
        <div>
          <LoginPageComponent setLoginState={(logged_in)=>{this.setState({loggedIn: logged_in})}}/>
          <div className="login">
            <div className="login-signup-option">
              <p className="link-to-signup">Don't have an account? <a class='signup-a' href="/signup">Sign up</a></p>
            </div>
          </div>
        </div>
      )
    } else {

      return (

        <div className="App">

          <header className="App-header">
            <div id='header-bar-left-buffer'></div>
            <div id='header-bar'>
              <img src='./outstagramme.png' className="App-logo" alt="logo" />
              <button onClick={this.handleLogoutClick} className="logout_btn">
                <img src="./icon_door.png" className="logout_img" />
              </button>
            </div>
          </header>

          <FeedComponent/>

          <footer className="App-footer">
              <a className="App-link"
                href="https://github.com/tremella/insta-react"
                target="_blank"
                rel="noopener noreferrer">
                visit github.com/tremella/insta-react
              </a>
          </footer>

        </div>
      )
    }

  }
}
