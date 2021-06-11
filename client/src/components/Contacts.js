import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function Contacts () {
    const { contacts } = useContacts()
    console.log(contacts)

    return (
        <ListGroup variant='flush'>
            {contacts.map((contact) => {
                return (
                    <ListGroup.Item key={contact.id}>
                        {contact.name}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}