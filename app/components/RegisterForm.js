import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { ButtonInput, Input } from 'react-bootstrap'
import { register } from '../actions'
 
class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(register({name: this.state.name, email: this.state.email, password: this.state.password}))
        this.setState({email: '', password: '', name: ''})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <Input type='text' label='Email' value={this.state.email} onChange={this.handleEmail} />
                <Input type='text' label='Name' value={this.state.name} onChange={this.handleName} />
                <Input type='password' label='Password' value={this.state.password} onChange={this.handlePassword} />
                <ButtonInput type='submit' value='Register' />
            </form>
        )
    }
}

const Register = connect()(RegisterForm)

export default Register
