import React, {Component} from 'react'
import './App.css';
import FeedComponent from './FeedComponent'
import LoginPageComponent from './LoginPageComponent'
import SignupPageComponent from './SignupPageComponent'


export default class InstaComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      signingUp: false
    }
    this.toggleSignup = this.toggleSignup.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }


  handleLogoutClick(ev) {
    ev.preventDefault();
 
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    };
 
    fetch('/logout', options )
      .then( response => response.json() )
      .then( response => { console.log(response, 'fetched /logout response')
      this.setState({loggedIn: false})
      }
    )
    console.log('loginState is now false')
  }

  toggleSignup(ev){
    ev.preventDefault()
    console.log(ev)
    if (this.state.signingUp === false) {
      this.setState({signingUp: true})
    } else if (this.state.signingUp === true) {
      this.setState({signingUp: false})
    } else {
      console.log('your signup state is broken lol')
    }
  }


  render(){

    if (this.state.loggedIn === true) {
      return (
        <div className="App">
          <header className="App-header">
            <div id='header-bar-left-buffer'></div>
            <div id='header-bar'>
              <img src='./outstagramme.png' className="App-logo" alt="logo" />
              <button onClick={this.handleLogoutClick} className="logout_btn">
                <img src="./icon_door.png" className="logout_img" alt="goodbye"/>
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
      // render loginComponent, give it a link to signup page.
    }
    if (this.state.signingUp === true) {
      return(
        <div>
          <SignupPageComponent/>
          <div className="login">
          <div className="login-signup-option">
            <p className="link-to-signup">
              Have an account? 
            <button className='signup-a' onClick={this.toggleSignup}> Log in</button></p>
          </div>
        </div>
        </div>
      )
    }
    return (
      <div>
        <LoginPageComponent setLoginState={(logged_in)=>{this.setState({loggedIn: logged_in})}}/>
        <div className="login">
          <div className="login-signup-option">
            <p className="link-to-signup">
              Don't have an account? 
            <button className='signup-a' onClick={this.toggleSignup}> Sign up</button></p>
          </div>
        </div>
      </div>
    )

  }
}
