import React, {Component} from 'react'
export default class SignupPageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // these need to be populated for signup request
            email: null,
            fullname: null,
            username: null,
            password: null
        }
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    }

    // for when the signup button is clicked
    handleSignupSubmit(ev){
        ev.preventDefault();

        const params = {}
        const options = {}

        fetch('/signup', options)
        .then() // turn resp into json
        .then() // log it
    }

    render(){
        return(
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
        )
    }
}
