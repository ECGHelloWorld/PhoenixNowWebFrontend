import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import { ButtonInput, Input } from 'react-bootstrap'
 
class EventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {title: '', description: '', from_date: '', to_date: ''}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(addEvent(this.props.token, {
            title: this.state.title,
            description: this.state.description,
            from_date: this.state.from_date,
            to_date: this.state.to_date,
        }))
        this.setState({title: '', description: '', from_date: '', to_date: ''})
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handleFromDate = (e) => {
        this.setState({from_date: e.target.value})
    }

    handleToDate = (e) => {
        this.setState({to_date: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <Input type='text' label='Title' value={this.state.title} onChange={this.handleTitle} />
                <Input type='textarea' label='Description' value={this.state.description} onChange={this.handleDescription} />
                <Input type='text' label='From Date' value={this.state.from_date} onChange={this.handleFromDate} />
                <Input type='text' label='To Date' value={this.state.to_date} onChange={this.handleToDate} />
                <ButtonInput type='submit' value='Add Event' />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token
    }
}

export default connect(mapStateToProps)(EventForm)
