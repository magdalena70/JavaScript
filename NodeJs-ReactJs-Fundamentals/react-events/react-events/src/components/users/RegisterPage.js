import React, { Component } from 'react'
import toastr from 'toastr'
import Auth from './Auth'
import RegisterForm from './RegisterForm'
import userData from '../../data/userData'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        }

        this.handleUserChanged = this.handleUserChanged.bind(this)
        this.registerUser = this.registerUser.bind(this)
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

    registerUser(event) {
        event.preventDefault()
        let user = this.state.user
        if (!this.validateUser(user)) {
            toastr.error('Invalid input')
            return
        }

        userData.register(user.email, user.password)
            .then(result => {
                if(result.error){
                    toastr.error(result.error)
                    return
                }

                Auth.authenticateUser(result.token)
                toastr.success('User is registered successfully!')
                this.props.history.push('./account')
            })

        //console.log(this.state)
    }

    validateUser(user) {
        let errors = {}
        let isValid = true

        if(user.email.length < 6){
            errors.email = 'E-mail is required'
            isValid = false
        }

        if (!user.password ||
            user.password.length < 3 ||
            user.password.length > 20) {
            errors.password = 'Password must be in range [min 3; max 20]'
            isValid = false
        }

        if (user.password !== user.confirmPassword) {
            errors.confirmPassword = 'Password must be equal to confirmPassword'
            isValid = false
        }

        this.setState({ errors })
        return isValid
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <RegisterForm
                    user={this.state.user}
                    errors={this.state.errors}
                    onChange={this.handleUserChanged}
                    registerUser={this.registerUser} />
            </div>
        )
    }
}

export default RegisterPage