import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { ButtonInput, Input } from 'react-bootstrap'
 
class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(login({email: this.state.email, password: this.state.password}))
        this.setState({email: '', password: ''})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <Input type='text' label='Email' value={this.state.email} onChange={this.handleEmail} />
                <Input type='password' label='Password' value={this.state.password} onChange={this.handlePassword} />
                <ButtonInput type='submit' value='Login' />
            </form>
        )
    }
}

const Login = connect()(LoginForm)

export default Login
