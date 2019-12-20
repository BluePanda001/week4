import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar =()=>{
    return(
        <nav className="nav-wrappper grey lighten-5"> 
            <div className="container">
                <Link to='/' className="brand-logo grey lighten-5 blue-text"><strong>Property24</strong></Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}
export default Navbar;