import React, { Component } from 'react'
import Signin from './Signin'
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

export default SigninList
