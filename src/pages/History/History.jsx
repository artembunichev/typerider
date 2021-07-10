import React from 'react'
import styled from 'styled-components'
import { Container } from '../Components/Styled/StyledComponents'

const HistoryContainer = styled(Container)`
  background-color: #e7e7e7;
`
const HistoryTitle = styled.span``

export const History = () => {
  return (
    <HistoryContainer>
      <HistoryTitle>Your Game History</HistoryTitle>
    </HistoryContainer>
  )
}
