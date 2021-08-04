import React, { useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Container, StartButton } from '../../components/styled/styledComponents'

const WelcomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #4e6375;
`
const WelcomeTitle = styled.div`
  @media (max-width: 800px) {
    font-size: 40px;
  }
  @media (max-width: 650px) {
    font-size: 37px;
  }
  @media (max-width: 540px) {
    font-size: 33px;
  }
  @media (max-width: 440px) {
    font-size: 27px;
  }
  font-size: 70px;
  margin: 25px;
  text-align: center;
  color: #ffffff;
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
    font-size: 20px;
  }
  @media (max-width: 470px) {
    width: 320px;
    height: 30px;
    padding: 6px 11px 6px 11px;
    font-size: 19px;
  }
  @media (max-width: 370px) {
    width: 250px;
    height: 27px;
    padding: 5px 11px 5px 11px;
    font-size: 16px;
  }
  width: 500px;
  height: 46px;
`
const LetsGoButton = styled(StartButton)`
  @media (max-width: 540px) {
    width: 300px;
  }
  @media (max-width: 470px) {
    width: 200px;
    height: 25px;
    font-size: 16px;
  }
  @media (max-width: 370px) {
    width: 140px;
    height: 21px;
    font-size: 17px;
  }
  width: 340px;
  height: 38px;
  font-size: 22px;
  margin-top: 16px;
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
