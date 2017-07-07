import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render () {
        return (
            <div>
                 <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/books/all'>All books</Link></li>
                    <li><Link to='/authors/all'>All authors</Link></li>                                                                                                                  
                </ul>
            </div>
        )
    }
}

export default Header