import React, {Component} from 'react'
export default class SignupPageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // these need to become populated for signup request
            email: null,
            fullname: null,
            username: null,
            password: null,
        }
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFullnameChange = this.handleFullnameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    // this helps trigger state update
    handleEmailChange(ev){
        this.setState({email: ev.target.value});
    }
    handleFullnameChange(ev){
        this.setState({fullname: ev.target.value});
    }
    handleUsernameChange(ev){
        this.setState({username: ev.target.value});
    }
    handlePasswordChange(ev){
        this.setState({password: ev.target.value});
    }

    // for when the signup button is clicked
    handleSignupSubmit(ev){
        ev.preventDefault();
        const params = {
            email: this.state.email,
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password
        }
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( params ),
            credentials: 'include'
        }
        console.log('STATE', this.state)

        fetch('/signup', options )
        .then( response => {
            if (response.status === 201) {
                alert(`signup successful`)
                this.props.setSignupState(false)
                // redirect?
            } else {
                alert(`signup failed: status ${response.status}`)
            }
        })

    }

    render(){
        return(
            <div className="signup">
                <br /><br />
                <form onSubmit={this.handleSignupSubmit}>
                <input type='text' id='email' className='form-input' placeholder='Email' onChange={this.handleEmailChange}></input> <br />
                <input type='text' id='full_name' className='form-input' placeholder='Full Name' onChange={this.handleFullnameChange}></input> <br />
                <input type='text' id='username' className='form-input' placeholder='Username' onChange={this.handleUsernameChange}></input> <br />
                <input type='text' id='password' className='form-input' placeholder='Password' onChange={this.handlePasswordChange}></input> <br />
                <input type='submit' className='form-button' value='Sign up'></input>
                </form>
                <br /><br />
            </div>
        )
    }
}
