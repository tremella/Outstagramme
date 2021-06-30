import React, {Component} from 'react'

export default class LoginPageComponent extends Component {

  constructor(props){
    super(props)
  }

  handleEmailChange(ev) {
     this.setState({email: ev.target.value});
  }
  handlePasswordChange(ev) {
     this.setState({password: ev.target.value});
  }

  handleLoginSubmit(ev) {
    const email = this.state.email;
    const password = this.state.password;
    ev.preventDefault();
    fetch('http://localhost:8000/login').
    then(response => response.json())
    .then(json => console.log(json))
    // handle verification here??
    // fetch req: user & password
    // if yes: populate this.sessionKey
    this.setState({loggedIn: true})
  }


  handleLogoutClick(ev) {
    this.setState({loggedIn: false})
  }

  render(){
    return (
      <div className="App">
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
          <form onSubmit={handleLoginSubmit} >
          <input type='text' id='email' placeholder='email address' onChange={handleEmailChange}></input> <br />
          <input type='text' id='password' placeholder='password' onChange={handlePasswordChange}></input> <br />
          <input type='submit' value='log in!'></input>
          </form>
        </div>
      </div>
    )
  }
}
