import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signin from './Signin'
import { getUser } from '../actions'
import { Table } from 'react-bootstrap'
import SigninList from './SigninList'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSignins: (token) => {
      dispatch(getUser(token, ownProps.params.userid))
    }
  }
}

const mapStateToProps = (state) => {
    return {
        signins: state.getuser,
        token: state.user.token
    }
}

const UserSigninListContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(SigninList)

export default UserSigninListContainer
