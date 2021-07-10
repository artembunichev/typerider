import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { WordsSettings } from './WordsSettings/WordsSettings'
import { GlobalSettings } from './GlobalSettings/GlobalSettings'
import { GameStoreContext, useStore } from '../../../stores/RootStore/RootStoreContext'

const GameSettingsContainer = styled.div`
  width: 22%;
  background-color: #ff0000;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`

export const GameSettings = observer(() => {
  const { AppStore } = useStore()
  const { GameSettingsState, ResultState } = useContext(GameStoreContext)

  const startGame = () => {
    AppStore.setGameMode(true)
    setTimer()
  }
  const setTimer = () => {
    const time = GameSettingsState.activeTimeForRace
    setTimeout(() => {
      AppStore.setGameMode(false)
      ResultState.setIsResultReady(true)
    }, time)
  }

  return (
    <GameSettingsContainer>
      <GlobalSettings />
      <WordsSettings />
      <Start onClick={startGame}>Start Game</Start>
    </GameSettingsContainer>
  )
})
