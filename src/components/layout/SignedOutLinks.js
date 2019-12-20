import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks =()=>{
    return(
       <ul className="right">
           <li><NavLink to='/signup' className="red-text"> <strong>Signup</strong></NavLink></li>
           <li><NavLink to='/signin' className="blue-text"><strong>Login</strong></NavLink></li>
       </ul>
    )
}
export default SignedOutLinks;
