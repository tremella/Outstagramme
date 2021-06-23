

export default function loginPage(handleLoginSubmit){
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
        <input type='text' id='email' placeholder='email address'></input> <br />
        <input type='text' id='password' placeholder='password'></input> <br />
        <input type='submit' value='log in!'></input>
        </form>
      </div>

    </div>
  )

}
