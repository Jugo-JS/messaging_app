import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider ({ children }) {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelctedConversationIndex] = useState(0)
    const { contacts } = useContacts()

    const createConversation = (recipients) => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages:[] }]
        })
    }

    const formattedConversations = conversations.map((conversation, index) => {
      const recipients = conversation.recipients.map((recipient) => {
          const contact = contacts.find((contact) => {
              return contact.id === recipient
          })
          const name = (contact && contact.name) || recipient
          return { id: recipient, name }
      })
      const selected = index === selectedConversationIndex
      return {...conversation, recipients, selected}
    })

    return (
        <ConversationsContext.Provider 
            value={{ 
                conversations: formattedConversations, 
                createConversation, 
                selectConversationIndex: setSelctedConversationIndex,
                selectedConversation: formattedConversations[selectedConversationIndex] 
            }}>
            {children}
        </ConversationsContext.Provider>
    )
}