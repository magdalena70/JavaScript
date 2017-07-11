import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './users/Auth'

const Navbar = (props) => (
    <div>
        {Auth.isUserAuthenticated() ? (
            <ul>
                <li><Link to='/account' >Account</Link></li>
                <li><Link to='/logout' >Logout</Link></li> 
                <li><Link to='/author/create' >Create author</Link></li>                                             
            </ul>
        ) : (
            <ul>
                <li><Link to='/register' >Register</Link></li>           
            </ul>
        )}
    </div>
)

export default Navbar