import React, {Component} from 'react'

export default class LoginPageComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: null,
      password: null
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleEmailChange(ev) {
    this.setState({email: ev.target.value});
  }
 handlePasswordChange(ev) {
    this.setState({password: ev.target.value});
 }

 handleLoginSubmit(ev) {
   ev.preventDefault();

   const params = {
     email: this.state.email,
     password: this.state.password
   };

   const options = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify( params ),
     credentials: 'include'
   };

   fetch('/login', options )
     .then( response => response.json() )
     .then( response => { console.log(response)
       if (response.session){
         //
         this.props.setLoginState(true)
       }
     }
   )
 }

 // now I think about it, a login component doesn't need a logout function
 // because it only exists for logging IN.
 handleLogoutClick(ev) {
   ev.preventDefault();
   console.log('1) clicked logout')

   const options = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     credentials: 'include'
   };

   fetch('/logout', options )
     .then( response => response.json() )
     .then( response => { console.log(response, '2) fetch /logout response')
     this.props.setLoginState(false)
     }
   )
   console.log('3) loginState is now false')
 }

  render(){
    return (
      <div className="App">
      <div className="login">
        <div className="login-slideshow">
          <img src='./phone_login_frame.png' className="login-slideshow-img" alt="slideshow" />
        </div>
        <div className="login-inner">
          <img src='./outstagramme-login.png' className="App-logo-login" alt="logo" />
          <form onSubmit={this.handleLoginSubmit} >
          <input type='text' id='email' className='form-input' placeholder='Email' onChange={this.handleEmailChange}></input> <br />
          <input type='text' id='password' className='form-input' placeholder='Password' onChange={this.handlePasswordChange}></input> <br />
          <input type='submit' className='form-button' value='Log In'></input>
          </form>
          {/* <p className="link-to-signup">Don't have an account? <a class='signup-a' href="/signup">Sign up</a></p> */}
        </div>
      </div>
    </div>
    )
  }
}
