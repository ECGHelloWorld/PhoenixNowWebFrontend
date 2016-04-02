import React from 'react'
import Login from './LoginForm'
import Register from './RegisterForm'
import { Row, Col } from 'react-bootstrap'

const LoginRegisterContainer = () => (
    <Row>
        <Col xs={6} md={4}>
            <h3>Login</h3>
            <Login />
        </Col>
        <Col xs={6} md={4}>
            <h3>Register</h3>
            <Register />
        </Col>
    </Row>
)

export default LoginRegisterContainer
