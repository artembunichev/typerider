import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bold } from '../../../../../Components/Styled/StyledComponents'

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ErrorContainer = styled.div`
  background-color: ${(props) => (props.isLighting ? '#ff2727' : '#ffaaaa')};
  border-radius: 9px;
  @media (max-width: 1400px) {
    padding: 10px;
  }
  @media (max-width: 1150px) {
    padding: 9px;
  }
  @media (max-width: 790px) {
    font-size: 8px;
  }
  padding: 11px;
  transition: background-color 0.2s ease-in;
`
const ErrorText = styled.span`
  color: #ffffff;
  @media (max-width: 1400px) {
    font-size: 32px;
  }
  @media (max-width: 1150px) {
    font-size: 28px;
  }
  @media (max-width: 1000px) {
    font-size: 35px;
  }
  @media (max-width: 790px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 390px) {
    font-size: 18px;
  }
  font-size: 37px;
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
