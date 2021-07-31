import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bold } from '../../../Components/Styled/StyledComponents'

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ErrorContainer = styled.div`
  background-color: ${(props) => (props.isLighting ? '#ff0000' : '#ffaaaa')};
  border-radius: 9px;
  padding: 19px;
  transition: background-color 0.2s ease-in;
`
const ErrorText = styled.span`
  color: #000000;
  font-size: 50px;
  user-select: none;
`

export const Error = () => {
  const [isLighting, setIsLighting] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLighting((prev) => !prev)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <ErrorWrapper>
      <ErrorContainer isLighting={isLighting}>
        <ErrorText>
          <Bold>Fix a mistake!</Bold>
        </ErrorText>
      </ErrorContainer>
    </ErrorWrapper>
  )
}
