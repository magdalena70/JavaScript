import React, { Component } from 'react'

class Author extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <div>
                    <img src={this.props.image} alt='book-author-img'/>
                </div>
            </div>
        )
    }
}

export default Author