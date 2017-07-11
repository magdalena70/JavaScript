import React, { Component } from 'react'
import toastr from 'toastr'
import AuthorForm from './AuthorForm'

class CreateAuthorPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: {
                firstName: '',
                lastName: ''
            },
            errors: {
                firstName: '',
                lastName: ''
            }
        }

        this.handleInputChanged = this.handleInputChanged.bind(this)
        this.saveAuthor = this.saveAuthor.bind(this)
        this.validateInput = this.validateInput.bind(this)
    }

    handleInputChanged(event) {
        const target = event.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        let author = this.state.author
        author[name] = value

        this.setState({ author })
    }

    saveAuthor(event) {
        event.preventDefault()
        if(!this.validateInput()){
            toastr.error('Invalid input')
            return
        }

        console.log(this.state)
        toastr.success('Author was created successfully!')
    }

    validateInput() {
        let isValid = true
        let author = this.state.author
        let errors = {}

        if (!author.firstName ||
            author.firstName.length < 3 ||
            author.firstName.length > 20) {
            errors.firstName = 'First name must be in range [min 3; max 20]'
            isValid = false
        }

        if (!author.lastName ||
            author.lastName.length < 3 ||
            author.lastName.length > 20) {
            errors.lastName = 'Last name must be in range [min 3; max 20]'
            isValid = false
        }

        this.setState({ errors: errors })
        return isValid
    }

    render() {
        return (
            <div>
                <h2>Create author</h2>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.handleInputChanged}
                    saveAuthor={this.saveAuthor}
                    errors={this.state.errors} />
            </div>
        )
    }
}

export default CreateAuthorPage