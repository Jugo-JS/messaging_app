import React from 'react'
import { useContacts } from '../contexts/ContactsProvider'

export default function Contacts () {
    const { contacts } = useContacts()
    console.log(contacts)

    return (
        <div>
            Contacts
        </div>
    )
}