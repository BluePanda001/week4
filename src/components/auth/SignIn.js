// creating a component for the sign in information

import React, { Component } from 'react'

class SignIn extends Component {
    state={
        email:'',
        password:''

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
                    <h5 className="grey-text text-darken-3 centre"><strong>Welcome Back,</strong></h5>
                    <h6 className="grey-text text-darken-1 centre">Sign in to continue</h6>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-4 z-depth-0 black-text"><strong>Login</strong></button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn
