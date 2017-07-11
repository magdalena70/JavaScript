import React, { Component } from 'react'

class Input extends Component {
    render() {
        let classStyle = ''
        if(this.props.errors && this.props.errors.length > 0){
            classStyle = 'error-input'
        }
        return (
            <div className={classStyle}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div>
                    <input type={this.props.type}
                        name={this.props.name}
                        id={this.props.name}
                        placeholder={this.props.label}
                        onChange={this.props.onChange}
                        value={this.props.value} />
                </div>
                <span className='error'>{this.props.errors}</span>
            </div>
        )
    }
}

export default Input