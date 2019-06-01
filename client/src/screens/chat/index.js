import React from 'react'

import { Header, Footer, Conversation, Balloon } from 'components'

import { Section } from './styles'

const Chat = () => (
  <Section>
    <Header />
    <Conversation>
      <Balloon author='bot' message='Seja bem vindo a pizzaria ulbra' />
      <Balloon author='me' message='Olá' />
    </Conversation>
    <Footer />
  </Section>
)

export default Chat
