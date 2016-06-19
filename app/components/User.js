import React from 'react'
import { Link } from 'react-router'


const User = ({ id, name, email, signedin, schedule,finalschedule,scheduleverified, verify, handleEvent, code }) => (
    <tr>
        <td>{id}</td>
        <td><Link to={"/users/" + id}>{name}</Link></td>
        <td>{email}</td>
        <td>{signedin}</td>
        <td>{schedule}</td>
        <td>{finalschedule}</td>
        <td>{scheduleverified}</td>
        <td><input type="button" value={id} onClick={handleEvent}>{verify}</input></td>
    </tr>
)

export default User
