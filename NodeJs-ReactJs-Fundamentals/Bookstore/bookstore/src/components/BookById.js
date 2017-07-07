import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'

class BookById extends Component {

    render () {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>by
                    <Link to={this.props.authorPath + this.props.authorId}> {this.props.authorName}</Link>
                </p>
                <div>
                   <img src={this.props.image} alt='book-img' /> 
                </div>
                <p>price: {this.props.price} BGN</p>
                <p>posted on {this.props.postedOn}</p>
                <p>description: {this.props.description}</p>
                <div>
                    <p>comments:</p> 
                    {this.props.comments.map(comment => (
                        <div key={comment.id}>
                            <Comment author={comment.author} 
                                content={comment.content}/>
                        </div>
                    ))}
                </div>                                              
            </div>
        )
    }
}

export default BookById