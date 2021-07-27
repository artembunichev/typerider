import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ErrorWrapper = styled.span`
  font-size: 24px;
`

export const Error = () => {
  return (
    <ErrorContainer>
      <ErrorWrapper>Fix a mistake!</ErrorWrapper>
    </ErrorContainer>
  )
}
