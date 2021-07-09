import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { WordsSettings } from './WordsSettings/WordsSettings'
import { GlobalSettings } from './GlobalSettings/GlobalSettings'
import { GameStoreContext } from '../../../stores/RootStore/RootStoreContext'

const GameSettingsContainer = styled.div`
  width: 22%;
  background-color: #ff0000;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`

export const GameSettings = observer(() => {
  const GameStore = useContext(GameStoreContext)

  const startGame = () => {
    GameStore.setGameMode(true)
    setTimer()
  }
  const setTimer = () => {
    const time = GameStore.activeTimeForRace
    setTimeout(() => {
      GameStore.setGameMode(false)
      GameStore.setIsResultReady(true)
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
