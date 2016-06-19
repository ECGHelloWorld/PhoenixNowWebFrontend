import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { getUsers, verifySchedule } from '../actions'
import { Table } from 'react-bootstrap'
import {Button} from 'react-button'

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers(this.props.token)
        this.setState({number:1})
    }
    handleEvent=(e,value)=>{
      e.preventDefault()
      verifySchedule(this.props.token, value)

    }
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Signed-in</th>
                        <th>User-Submitted Schedule</th>
                        <th>Verified Schedule</th>
                        <th>Schedule-Verified</th>
                        <th>Verify</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.users.map(user =>
                    <User key={user.id} name={user.name} id={user.id} email={user.email} signedin={user.signedin} schedule={user.schedule} finalschedule={user.finalschedule} scheduleverified={user.scheduleverified}  verify={user.verify} handleEvent={(e,value)=>this.handleEvent(e,user.id)}/>
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
