import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import data from '../Data'
import Book from './Book'

class Books extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: [],
            offset: 0
        }

        this.sortByTitle = this.sortByTitle.bind(this)
        this.sortByDateDesc = this.sortByDateDesc.bind(this)
        this.sortByAuthor = this.sortByAuthor.bind(this)
        this.handlePageClick = this.handlePageClick.bind(this)                                                   
    }

    componentDidMount () {
        data.getBooks()
            .then(books => {
                this.setState({
                    books: books.sort((a, b) => {
                        return a.postedOn > b.postedOn
                    }).slice(0, 2),
                    pageCount: Math.ceil(books.length / 2)
                })
            })
    }

    handlePageClick = (books) => {
        let selected = books.selected
        let offset = Math.ceil(selected * 2)

        this.setState({offset: offset}, () => {
            data.getBooks()
            .then(books => {
                this.setState({
                    books: books.sort((a, b) => {
                        return a.postedOn > b.postedOn
                    }).slice(this.state.offset, this.state.offset + 2)
                })
            })
        })
    }

    sortByDateDesc(){
        data.getBooks()
            .then(books => {
                this.setState({
                    books: books.sort((a, b) => {
                        return a.postedOn < b.postedOn
                    })
                })
            })
    }

    sortByTitle(){
        data.getBooks()
            .then(books => {
                this.setState({
                    books: books.sort((a, b) => {
                        return a.title.localeCompare(b.title)
                    })
                })
            })
    }

    sortByAuthor(){
        data.getBooks()
            .then(books => {
                this.setState({
                    books: books.sort((a, b) => {
                        return a.authorName.localeCompare(b.authorName)
                    })
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
                 <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />

                <h2>All books</h2>
                <button onClick={this.sortByDateDesc}>Sort by date descending</button>                
                <button onClick={this.sortByTitle}>Sort by title</button>
                <button onClick={this.sortByAuthor}>Sort by author</button>                
                <div>{books}</div>
            </div>
        )
    }
}

export default Books