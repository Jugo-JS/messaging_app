import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider ({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    return (
        <ContactsContext.Provider value={{ contacts }}>
            {children}
        </ContactsContext.Provider>
    )
}