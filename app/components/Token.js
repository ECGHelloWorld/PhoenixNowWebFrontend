import React from 'react'
import { connect } from 'react-redux'

const TokenText = ({ token }) => (
    <div>{ token }</div>
)

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}

const Token = connect(mapStateToProps)(TokenText)
    
export default Token
