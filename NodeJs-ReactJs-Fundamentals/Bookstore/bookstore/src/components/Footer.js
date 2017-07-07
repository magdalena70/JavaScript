import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <small>
                        <Link to='/about'>About Us</Link>
                        </small>
                    </li>
                    <li>
                        <small>
                        <Link to='/contacts'>Contacts</Link>
                        </small>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer