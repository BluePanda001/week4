// creating a component for the sign up information

import React, { Component } from 'react'

class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''

    }
    //method that updates the state variable to the value entered by the user
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3 centre"><strong>Welcome New User,</strong></h5>
                    <h6 className="grey-text text-darken-1 centre">Sign up to continue</h6>
                    <div className="input-field">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName"><strong>First Name</strong></label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName"><strong>Last Name</strong></label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-4 z-depth-0 black-text"><strong>Sign Up</strong></button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignUp
