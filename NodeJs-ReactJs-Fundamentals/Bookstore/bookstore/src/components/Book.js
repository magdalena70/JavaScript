import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {

    render () {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>by
                    <Link to={this.props.authorPath}> {this.props.authorName}</Link>
                </p>
                <div>
                   <img src={this.props.image} alt='book-img' /> 
                </div>
                <p>price: {this.props.price} BGN</p>
                <p>posted on {this.props.postedOn}</p>
                <p><Link to={this.props.bookPath}>Details</Link></p>                                              
            </div>
        )
    }
}

export default Book