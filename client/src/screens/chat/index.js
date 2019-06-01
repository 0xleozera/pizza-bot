import React, { useState, useEffect } from 'react'

import { ConversationService } from 'services'

import { Header, Footer, Conversation, Balloon } from 'components'
import { Section } from './styles'

const Chat = () => {
  const [messages, setMessage] = useState([])
  const [context, setContext] = useState({})

  useEffect(() => {
    welcomeMessage()
  }, [])

  const welcomeMessage = async () => {
    const resultService = await ConversationService.message()
    setMessage((messages) => [...messages, { author: 'bot', message: resultService.message, context: resultService.context }])
    setContext(resultService.context)
  }

  const handleTypedMessage = async (message) => {
    setMessage((messages) => [...messages, { author: 'me', message, context }])
    
    const resultService = await ConversationService.message({ text: message, context })
  
    setMessage((messages) => [...messages, { author: 'bot', message: resultService.message, context: resultService.context }])
  
    setContext(resultService.context)
  }

  const renderMessages = (messages) => {
    const mappedMessages = messages.map((message, index) => (
      <Balloon
        key={index}
        author={message.author}
        message={message.message}
      />
    ))
  
    return mappedMessages
  }

  return (
    <Section>
      <Header />
      <Conversation>
        {renderMessages(messages)}
      </Conversation>
      <Footer
        onSubmit={(message) => handleTypedMessage(message, context, setMessage, setContext)}
      />
    </Section>
  )
}

export default Chat
