import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore, GameStoreContext } from '../../../stores/RootStore/RootStoreContext'
import { wordFormConverter } from '../../../assets/functions/wordFormConverter'

const TimerContainer = styled.div`
  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  font-size: 46px;
  display: flex;
  justify-content: center;
  padding: 8px;
`

export const Timer = observer(() => {
  const { AppStore, GameSettingsStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)

  useEffect(() => {
    const time = GameSettingsStore.activeTimeForRace / 1000
    PlayGameState.setCurrentTime(time)
  }, [GameSettingsStore.activeTimeForRace])

  useEffect(() => {
    let timeInterval
    if (AppStore.gameMode) {
      timeInterval = setInterval(() => {
        PlayGameState.updateCurrentTime()
      }, 1000)
    }
    return () => {
      clearInterval(timeInterval)
    }
  }, [AppStore.gameMode])

  const secondForm = wordFormConverter('second', PlayGameState.currentTime)

  return (
    <TimerContainer>
      {PlayGameState.currentTime} {secondForm} left
    </TimerContainer>
  )
})
