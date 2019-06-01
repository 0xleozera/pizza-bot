import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Field, SubmitButton, Icon, Form } from './styles'

const Footer = ({ onSubmit }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(message)
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Container>
        <Field
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <SubmitButton>
          <Icon />
        </SubmitButton>
      </Container>
    </Form>
  )
}

Footer.propTypes = {
  onSubmit: PropTypes.func
}

export default Footer
