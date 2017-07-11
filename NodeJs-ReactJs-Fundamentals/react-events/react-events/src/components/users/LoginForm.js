import React, { Component } from 'react'
import Input from '../Input'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <Input
                        type='email'
                        name='email'
                        label='E-mail'
                        onChange={this.props.onChange}
                        value={this.props.user.email} 
                        errors={this.props.errors.email} />
                    <Input
                        type='password'
                        name='password'
                        label='Password'
                        onChange={this.props.onChange}
                        value={this.props.user.password}
                        errors={this.props.errors.password} />
                    <div>
                        <input type='submit' value='Send' onClick={this.props.loginUser} />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm