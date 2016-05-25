import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signin from './Signin'
import { getSignins } from '../actions'
import SigninList from './SigninList'
import { Table } from 'react-bootstrap'

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
