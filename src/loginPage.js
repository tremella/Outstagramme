

export default function loginPage(handleLoginSubmit,handleEmailChange,handlePasswordChange){
  return (
    <div className="App">
      {/* <div className="signup">
        <h3> this should be visible BEFORE signup OR login</h3>
        <form>
          <input type='text' id='first_name' placeholder='first name'></input> <br />
          <input type='text' id='email' placeholder='email address'></input> <br />
          <input type='text' id='password' placeholder='password'></input> <br />
          <input type='submit' value='sign up!'></input>
        </form>
      </div> */}

      <div className="login">
        <div className="login-slideshow">
          <img src='./phone_login_frame.png' className="login-slideshow-img" alt="slideshow" />
        </div>
        <div className="login-inner">
          <img src='./outstagramme-login.png' className="App-logo-login" alt="logo" />
          <form onSubmit={handleLoginSubmit} >
          <input type='text' id='email' className='login-input' placeholder='Email' onChange={handleEmailChange}></input> <br />
          <input type='text' id='password' className='login-input' placeholder='Password' onChange={handlePasswordChange}></input> <br />
          <input type='submit' className='login-button' value='Log In'></input>
          </form>
        </div>
      </div>
    </div>
  )
}
