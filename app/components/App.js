import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Alert, Grid, Row, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'
import { resetErrorMessage, logout } from '../actions'

class App extends Component {
    constructor(props) {
        super(props)
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
            <Alert bsStyle='danger' dismissAfter={2000} onDismiss={this.props.resetErrorMessage}>
                <b>{error}</b>
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
                        <li role='presentation'><Link to="/signins">Sign-ins</Link></li>
                        <li role='presentation'><a href='#' onClick={this.props.logout}>Logout</a></li>
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

export default connect(mapStateToProps, {resetErrorMessage, logout})(App)
