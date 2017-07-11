import React, { Component } from 'react'
import toastr from 'toastr'
import Auth from './Auth'
import LoginForm from './LoginForm'
import userData from '../../data/userData'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        }

        this.handleUserChanged = this.handleUserChanged.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.validateUser = this.validateUser.bind(this)
    }

    handleUserChanged(event) {
        const target = event.target
        const inputField = target.name
        const value = target.value

        const user = this.state.user
        user[inputField] = value
        this.setState({ user })
    }

    loginUser(event) {
        event.preventDefault()
        let user = this.state.user
        if (!this.validateUser(user)) {
            toastr.error('Invalid input')
            return
        }

        userData.login(user.email, user.password)
            .then(result => {
                if (result.error) {
                    toastr.error(result.error)
                    return
                }

                Auth.authenticateUser(result.token)
                toastr.success('User is loged in successfully!')
                this.props.history.push('/account')
            })

            //console.log(this.state)
    }

    validateUser(user) {
        let errors = {}
        let isValid = true

        if (user.email.length < 6) {
            errors.email = 'E-mail is required'
            isValid = false
        }

        if (!user.password ||
            user.password.length < 3 ||
            user.password.length > 20) {
            errors.password = 'Password must be in range [min 3; max 20]'
            isValid = false
        }

        this.setState({ errors })
        return isValid
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <LoginForm 
                    user={this.state.user}
                    errors={this.state.errors}
                    onChange={this.handleUserChanged}
                    loginUser={this.loginUser} />
            </div>
        )
    }
}

export default LoginPage