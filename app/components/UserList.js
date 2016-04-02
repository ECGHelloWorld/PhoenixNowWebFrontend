import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { getUsers } from '../actions'
import { Table } from 'react-bootstrap'

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers(this.props.token)
    }
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.users.map(user =>
                    <User key={user.id} name={user.name} id={user.id} email={user.email} />
                )}
                </tbody>
            </Table>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (token) => {
      dispatch(getUsers(token))
    }
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        token: state.user.token
    }
}

const UserListContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(UserList)

export default UserListContainer
