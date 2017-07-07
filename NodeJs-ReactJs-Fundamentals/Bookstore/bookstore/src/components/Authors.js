import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from '../Data'
import Author from './Author'

class Authors extends Component {
    constructor(props){
        super(props)

        this.state = {
            authors: []
        }

        this.sortByNameAsc = this.sortByNameAsc.bind(this)
        this.sortByNameDesc = this.sortByNameDesc.bind(this)       
    }

    componentDidMount () {
        data.getAuthors()
            .then(authors => {
                this.setState({
                    authors: authors
                })
            })
    }

    sortByNameAsc(){
        data.getAuthors()
            .then(authors => {
                this.setState({
                    authors: authors.sort((a, b) => {
                        return a.name.localeCompare(b.name)
                    })
                })
            })
    }

    sortByNameDesc(){
        data.getAuthors()
            .then(authors => {
                this.setState({
                    authors: authors.sort((a, b) => {
                        return b.name.localeCompare(a.name)
                    })
                })
            })
    }

    render () {
        let authorPath = '/authors/'
        let authors = this.state.authors.map(author => (
            <div key={author.id} className='author-div'>
                <Author name={author.name} image={author.image} />
                <Link to={authorPath + author.id}>Details</Link>
            </div>
        ))

        return (
            <div>
                <h2>All Authors</h2>
                <button onClick={this.sortByNameAsc}>Sort by name ascending</button>
                <button onClick={this.sortByNameDesc}>Sort by name descending</button>
                <div>{authors}</div>
            </div>
        )
    }
}

export default Authors