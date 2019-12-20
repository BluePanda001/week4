import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks =()=>{
    return(
       <ul className="right">
           
           <li><NavLink to='/notifications' className="grey-text text-darken-3">Notifications</NavLink></li>
           <li><NavLink to='/' className="grey-text text-darken-3">Logout</NavLink></li>
           <li><NavLink to='/' className="btn btn-floating red">PP</NavLink></li>
       </ul>
    )
}
export default SignedInLinks;
