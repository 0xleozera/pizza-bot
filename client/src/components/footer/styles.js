import styled from 'styled-components'

import { colors } from 'assets'
import { send } from 'assets/images'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  background-color: ${colors.secondary};
  border-top: 1px solid ${colors.details};
`

export const Container = styled.div`
  display: flex;
  width: 80%;
`

export const Field = styled.input.attrs({
  placeholder: 'Digite sua mensagem'
})`
  height: 40px;
  border-radius: 30px;
  background-color: ${colors.accent};
  outline: none;
  padding: 0px 20px;
  color: ${colors.base};
  margin-right: 20px;
  width: 90%;

  &::placeholder {
    color: ${colors.placeholder};
  }

  @media (max-width: 700px) {
    width: 65%;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  height: 43px;
  width: 43px;
  border-radius: 100%;
  background-color: ${colors.button};
  cursor: pointer;
  transition: background-color 600ms ease;

  &:hover {
    background-color: ${colors.hover};
  }

  &:focus {
    outline: none;
  }
`

export const Icon = styled.img.attrs({
  src: send,
  alt: 'Submit'
})`
`
