import React from 'react'
import styled from '@emotion/styled'

const WelcomeContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #93c2ff;
`
const WelcomeSubTitle = styled.div`
  font-size: 70px;
`
const WelcomeInput = styled.input`
  margin-top: 16px;
  font-size: 24px;
  border-radius: 9px;
  padding: 9px;
  width: 500px;
  height: 32px;
  border: none;
  outline: none;
`
const LetsGo = styled.button`
  font-size: 22px;
  margin-top: 16px;
  width: 340px;
  height: 38px;
  border-radius: 9px;
  &:hover {
    cursor: pointer;
  }
`

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeSubTitle>Your nickname for the next race?</WelcomeSubTitle>
      <WelcomeInput />
      <LetsGo>Let`s go!</LetsGo>
    </WelcomeContainer>
  )
}
