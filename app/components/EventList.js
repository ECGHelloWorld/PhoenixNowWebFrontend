import React, { Component } from 'react'
import { connect } from 'react-redux'
import Event from './Event'
import EventForm from './EventForm'
import { getEvents } from '../actions'
import { Table } from 'react-bootstrap'

class EventList extends Component {
    componentWillMount() {
        this.props.getEvents(this.props.token)
    }

    render() {
        return (
            <div>
                <EventForm />
                <Table responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Importance</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.events.map(event =>
                        <Event key={event.id} from_date={event.from_date} to_date={event.to_date} title={event.title} description={event.description} importance={event.importance} id={event.id} />
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: (token) => {
      dispatch(getEvents(token))
    }
  }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        token: state.user.token
    }
}

const EventListContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(EventList)

export default EventListContainer
