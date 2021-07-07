import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { useHistory } from 'react-router-dom'
import { TimeForRace } from './TimeForRace/TimeForRace'
import { VehicleForRace } from './VehicleForRace/VehicleForRace'
import { WordsSettings } from './WordsSettings/WordsSettings'

const GameSettingsContainer = styled.div`
  width: 22%;
  background-color: #ff0000;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`

export const GameSettings = observer(() => {
  const { GameSettingsStore, ResultStore } = useStore()
  const history = useHistory()

  const startGame = () => {
    GameSettingsStore.setGameMode(true)
    setTimer()
  }
  const setTimer = () => {
    const time = GameSettingsStore.activeTimeForRace
    setTimeout(() => {
      ResultStore.setIsResultReady(true)
      history.push('/result')
      GameSettingsStore.setGameMode(false)
    }, time)
  }

  return (
    <GameSettingsContainer>
      <TimeForRace />
      <VehicleForRace />
      <WordsSettings />
      <Start onClick={startGame}>Start Game</Start>
    </GameSettingsContainer>
  )
})
