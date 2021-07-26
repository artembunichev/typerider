import React, { useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Container } from '../../Components/Styled/StyledComponents'

const WelcomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #93c2ff;
`
const WelcomeTitle = styled.div`
  @media (max-width: 650px) {
    font-size: 54px;
  }
  @media (max-width: 540px) {
    font-size: 45px;
  }
  @media (max-width: 370px) {
    font-size: 39px;
  }
  font-size: 70px;
  margin: 25px 25px 25px 8px;
  text-align: center;
`
const WelcomeInput = styled.input`
  margin-top: 8px;
  font-size: 24px;
  border-radius: 9px;
  padding: 9px;
  @media (max-width: 650px) {
    width: 460px;
  }
  @media (max-width: 540px) {
    width: 395px;
  }
  @media (max-width: 470px) {
    width: 350px;
    height: 37px;
  }
  @media (max-width: 370px) {
    width: 300px;
    height: 33px;
  }
  width: 500px;
  height: 46px;
  border: none;
  outline: none;
`
const LetsGoButton = styled.button`
  margin-top: 16px;
  @media (max-width: 540px) {
    width: 300px;
  }
  @media (max-width: 470px) {
    width: 240px;
    height: 30px;
  }
  @media (max-width: 370px) {
    width: 200px;
    font-size: 17px;
  }
  width: 340px;
  height: 38px;
  font-size: 22px;
  border-radius: 9px;
  &:hover {
    cursor: pointer;
  }
`
export const Welcome = observer(() => {
  const { AppStore } = useStore()
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  const goToGame = () => {
    const nickname = inputValue.trim()
    if (nickname) {
      AppStore.setUserNickname(nickname)
      history.push('/game')
      setInputValue('')
    }
  }
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      goToGame()
    }
  }

  return (
    <WelcomeContainer>
      <WelcomeTitle>Your nickname for the next race?</WelcomeTitle>
      <WelcomeInput
        autoFocus={true}
        maxLength='16'
        onChange={onInputChange}
        onKeyPress={onEnterPress}
        value={inputValue}
      />
      <LetsGoButton onClick={goToGame}>Let&apos;s go!</LetsGoButton>
    </WelcomeContainer>
  )
})
