import React, { Component } from 'react'
import data from '../Data'
import Book from './Book'

class HomePage extends Component {
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
                    books: books.sort((a, b) => {
                        return a.postedOn < b.postedOn
                    }).slice(0, 3)
                })
            })
    }
    
    render () {
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
                <h2>Welcome to Bookstore's home!</h2>
                {books}
            </div>
        )
    }
}

export default HomePage