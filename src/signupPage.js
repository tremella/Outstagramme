

export default function loginPage(handleSignupSubmit,handleEmailChange,handlePasswordChange){
  return (
    <div className="App">
      <div className="signup">
        <br /><br />
        <form onSubmit={handleSignupSubmit}>
          <input type='text' id='email' className='form-input' placeholder='Email'></input> <br />
          <input type='text' id='full_name' className='form-input' placeholder='Full Name'></input> <br />
          <input type='text' id='username' className='form-input' placeholder='Username'></input> <br />
          <input type='text' id='password' className='form-input' placeholder='Password'></input> <br />
          <input type='submit' className='form-button' value='Sign up'></input>
        </form>
        <br /><br />
      </div>
    </div>
  )
}
