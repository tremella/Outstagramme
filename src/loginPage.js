

export default function loginPage(handleLoginSubmit,handleEmailChange,handlePasswordChange){
  return (
    <div className="App">
      <div className="signup">
        <br /><br />
        <form>
          {/* <form onSubmit=@{handleSignupSubmit}> */}
          <input type='text' id='email' className='form-input' placeholder='Email'></input> <br />
          <input type='text' id='full_name' className='form-input' placeholder='Full Name'></input> <br />
          <input type='text' id='username' className='form-input' placeholder='Username'></input> <br />
          <input type='text' id='password' className='form-input' placeholder='Password'></input> <br />
          <input type='submit' className='form-button' value='Sign up'></input>
        </form>
        <br /><br />
      </div>

      <div className="login">
        {/* <div className="login-slideshow">
          <img src='./phone_login_frame.png' className="login-slideshow-img" alt="slideshow" />
        </div> */}
        <div className="login-inner">
          <img src='./outstagramme-login.png' className="App-logo-login" alt="logo" />
          <form onSubmit={handleLoginSubmit} >
          <input type='text' id='email' className='form-input' placeholder='Email' onChange={handleEmailChange}></input> <br />
          <input type='text' id='password' className='form-input' placeholder='Password' onChange={handlePasswordChange}></input> <br />
          <input type='submit' className='form-button' value='Log In'></input>
          </form>
          <p className="link-to-signup">Don't have an account? <a class='signup-a' href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}
