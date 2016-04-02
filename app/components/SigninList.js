import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signin from './Signin'
import { getSignins } from '../actions'
import { Table } from 'react-bootstrap'

class SigninList extends Component {
    componentWillMount() {
        this.props.getSignins(this.props.token)
    }
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.signins.map(signin =>
                    <Signin key={signin.id} date={signin.date} id={signin.id} />
                )}
                </tbody>
            </Table>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSignins: (token) => {
      dispatch(getSignins(token))
    }
  }
}

const mapStateToProps = (state) => {
    return {
        signins: state.signins,
        token: state.user.token
    }
}

const SigninListContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(SigninList)

export default SigninListContainer
