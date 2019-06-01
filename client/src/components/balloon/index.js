import React from 'react'
import PropTypes from 'prop-types'

import { If } from 'components'

import { Container, Indicator, Message, Text } from './styles'

const Balloon = ({ author, message }) => (
  <Container author={author}>
    <If test={author === 'me'}>
      <Message author={author}>
        <Text>{message}</Text>
      </Message>
      <Indicator author={author} />
    </If>

    <If test={author !== 'me'}>
      <Indicator author={author} />
      <Message author={author}>
        <Text>{message}</Text>
      </Message>
    </If>
  </Container>
)

Balloon.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string
}

export default Balloon
