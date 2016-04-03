import React from 'react'

const Event = ({ from_date, to_date, title, description, id }) => (
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{from_date}</td>
        <td>{to_date}</td>
    </tr>
)

export default Event
