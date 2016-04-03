import React, { Component } from 'react'
import { connect } from 'react-redux'
import Event from './Event'
import EventForm from './EventForm'
import { getEvents } from '../actions'
import { Table, Row, Col } from 'react-bootstrap'

class EventList extends Component {
    componentWillMount() {
        this.props.getEvents(this.props.token)
    }

    render() {
        return (
            <div>
            <Row>
                <Col xs={12} md={6}>
                    <p>To use this app, just fill in the form</p>
                    <p>Importance takes whole numbers and the higher it is the more important the event is</p>
                    <p>The date format for a day like April 2, 2016 is 2016-4-2</p>
                    <p>For a day like November 12, 2016 the format is 2016-11-12</p>
                </Col>
                <Col xs={12} md={6}>
                    <EventForm />
                </Col>
            </Row>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>x</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.events.map(event =>
                        <Event key={event.id} from_date={event.from_date} to_date={event.to_date} title={event.title} description={event.description} id={event.id} />
                    )}
                    </tbody>
                </Table>
            </Row>
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
