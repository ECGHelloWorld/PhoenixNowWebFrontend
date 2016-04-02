import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Alert, Grid, Row, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'
import { resetErrorMessage } from '../actions'

class App extends Component {
    constructor(props) {
        super(props)
    }

    handleDismissClick = (e) => {
        this.props.resetErrorMessage()
        e.preventDefault()
    }

    loggedIn() {
        return !(this.props.user === null)
    }

    renderErrorMessage() {
        const { error } = this.props

        if (!error) {
            return null
        }

        return (
            <Alert bsStyle='danger'>
                <b>{error}</b>
                {' '}
                (<a href="#"
                    onClick={this.handleDismissClick}>
                    Dismiss
                </a>)
            </Alert>
        )
    }

    render() {
        const { children, user } = this.props
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">PhoenixNow</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    { this.loggedIn() ? 
                    <Nav>
                        <li role='presentation'><Link to="/users">Users</Link></li>
                        <li role='presentation'><Link to="/token">Token</Link></li>
                        <li role='presentation'><Link to="/signins">Sign-ins</Link></li>
                    </Nav>
                    : null}
                </Navbar>
                <Grid>
                    {this.renderErrorMessage()}
                    {children}
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.error,
        user: state.user
    }
}

export default connect(mapStateToProps, {resetErrorMessage})(App)
