import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Conversation = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Conversation.propTypes = {
  children: PropTypes.node
}

export default Conversation
