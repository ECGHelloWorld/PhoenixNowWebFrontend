import React from 'react'
import { Link } from 'react-router'

const User = ({ id, name, email, signedin }) => (
    <tr>
        <td>{id}</td>
        <td><Link to={"/users/" + id}>{name}</Link></td>
        <td>{email}</td>
        <td>{signedin}</td>
    </tr>
)

export default User
