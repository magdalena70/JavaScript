import React, { Component } from 'react'

class Comment extends Component {
    render () {
        return (
            <p className='comment-box'>
                by {this.props.author} - {this.props.content}
            </p>
        )
    }
}

export default Comment