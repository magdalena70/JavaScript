import React, { Component } from 'react'
import data from '../Data'
import BookById from './BookById'

class BookDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount () {
        data.getBooks()
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }

    render () {
        let authorPath = '/authors/'
        let bookId = parseInt(this.props.match.params.id)
        let book = this.state.books.map(book => {
            if(book.id === bookId){
                return (
                    <BookById title={book.title}
                        image={book.image}
                        authorPath={authorPath + book.authorId}
                        authorName={book.authorName}
                        price={book.price}
                        postedOn={book.postedOn}
                        description={book.description}
                        comments={book.comments} />
                )
            }
        })

        return (
            <div>{book}</div>
        )
    }
}

export default BookDetails