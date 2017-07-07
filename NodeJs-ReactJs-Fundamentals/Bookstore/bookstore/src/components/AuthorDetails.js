import React, { Component } from 'react'
import data from '../Data'
import Author from './Author'
import Book from './Book'

class AuthorDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            authors: [],
            books: []
        }
    }

    componentDidMount(){
        data.getAuthors()
            .then(authors => {
               this.setState({
                   authors: authors
               })
            })

        data.getBooks()
            .then(books => {
                let authorId = parseInt(this.props.match.params.id) 
                let authorBooks = books.filter(book => {
                     return book.authorId === authorId
                })

                this.setState({
                    books: authorBooks
                })
            })
    }

    render () {
        let authorId = parseInt(this.props.match.params.id)
        let author = this.state.authors.map(author => {
            if(author.id === authorId){
                return (
                    <Author name={author.name} image={author.image} />
                )
            }
        })

        let bookPath = '/books/'
        let authorPath = '/authors/'
        let books = this.state.books.map(book => (
            <div key={book.id} className='book-div'>
                <Book title={book.title}
                    image={book.image}
                    price={book.price} 
                    postedOn={book.postedOn}
                    authorPath={authorPath + book.authorId}
                    authorName={book.authorName}
                    bookPath={bookPath + book.id} />                             
            </div>
        ))

        return (
            <div>
                <h2>Author's details</h2>
                <div>{author}</div>
                <div>{books}</div>              
            </div>
        )
    }
}

export default AuthorDetails