import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions'

class Event extends Component {
    handleDelete = (e) => {
        const { deleteEvent, token, id } = this.props
        deleteEvent(token, id)
        e.preventDefault()
    }

    render() {
        const { id, title, description, from_date, to_date } = this.props
        return (
            <tr>
                <td><a href='#' onClick={this.handleDelete}>x</a></td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{from_date}</td>
                <td>{to_date}</td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (token, id) => {
        dispatch(deleteEvent(token, id))
    }
  }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(Event)
