import React from 'react'
import styled from '@emotion/styled'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Container } from '../StyledComponents/StyledComponents'

const WelcomeContainer = styled(Container)`
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
export const Welcome = observer(() => {
  const { AppStore } = useStore()
  const history = useHistory()

  const startGame = () => {
    const nickname = AppStore.inputValue.trim()
    AppStore.setUserNickname(nickname)
    history.push('/game')
  }
  const onInputChange = (e) => {
    AppStore.setInputValue(e.target.value)
  }
  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      startGame()
    }
  }

  return (
    <WelcomeContainer>
      <WelcomeSubTitle>Your nickname for the next race?</WelcomeSubTitle>
      <WelcomeInput onChange={onInputChange} onKeyPress={onEnterPress} />
      <LetsGo onClick={startGame}>Let`s go!</LetsGo>
    </WelcomeContainer>
  )
})
