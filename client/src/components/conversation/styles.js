import styled from 'styled-components'
import { colors } from 'assets'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  background-color: ${colors.primary};
  overflow-y:auto;

  &::-webkit-scrollbar {
    opacity: 0;
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
`
