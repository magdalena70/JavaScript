import React, { Component } from 'react'
import Input from './Input'

class AuthorForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <Input
                        type='text'
                        name='firstName'
                        label='First Name'
                        onChange={this.props.onChange}
                        value={this.props.author.firstName} 
                        errors={this.props.errors.firstName} />
                    <Input
                        type='text'
                        name='lastName'
                        label='Last Name'
                        onChange={this.props.onChange}
                        value={this.props.author.lastName}
                        errors={this.props.errors.lastName} />
                    <div>
                        <input type='submit' value='Send' onClick={this.props.saveAuthor} />
                    </div>
                </form>
            </div>
        )
    }
}

export default AuthorForm