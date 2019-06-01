import styled from 'styled-components'

import { colors } from 'assets'
import { icon } from 'assets/images'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${colors.secondary};
  padding: 5px 20px;
  border-bottom: 1px solid ${colors.details};
`

export const Avatar = styled.div`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background: url(${icon}) no-repeat center center;
  background-size: cover;
  margin-right: 20px;
`

export const Name = styled.span`
  color: ${colors.base};
  font-size: 18px;
  font-weight: bold;
`
