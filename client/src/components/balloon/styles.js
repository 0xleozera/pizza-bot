import styled, { css } from 'styled-components'
import { colors } from 'assets'

export const Container = styled.div`
  display: flex;
  align-self: ${({ author }) => author === 'me' ? 'flex-end' : 'flex-start'};
  max-width: 90%
  min-height: 60px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`

export const Indicator = styled.div`
  background-color: ${({ author }) => author === 'me' ? colors.button : colors.hover};
  width: 6px;

  ${({ author }) => author === 'me' ?
    css`
      margin-left: 2px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    ` :
    css`
      margin-right: 2px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    `
  };

  @media (max-width: 700px) {
    width: 8px;
  }
`

export const Message = styled.div`
  background-color: ${colors.accent};
  width: 98.5%;
  padding: 10px;

  ${({ author }) => author === 'me' ?
    css`
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    ` :
    css`
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    `
  };

  @media (max-width: 700px) {
    width: 97.5%;
  }
`

export const Text = styled.p`
  color: ${colors.base}
`
