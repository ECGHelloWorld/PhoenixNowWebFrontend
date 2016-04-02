import React from 'react'

const Event = ({ from_date, to_date, title, description, importance, id }) => (
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{from_date}</td>
        <td>{to_date}</td>
        <td>{importance}</td>
    </tr>
)

export default Event
