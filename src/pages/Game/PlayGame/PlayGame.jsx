import React, { useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { GameInput } from './GameInput/GameInput'
import { Track } from './Track/Track'

const PlayGameContainer = styled.div`
  background-color: #1100ff;
  width: 78%;
`
const ErrorContainer = styled.div`
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Error = styled.span`
  font-size: 24px;
`

export const PlayGame = observer(() => {
  const { GameStore, GameSettingsStore } = useStore()
  useEffect(() => {
    const time = GameSettingsStore.activeTimeForRace / 1000
    GameStore.setCurrentTime(time)
  }, [GameSettingsStore.activeTimeForRace])
  useEffect(() => {
    let timeInterval
    if (GameSettingsStore.gameMode) {
      timeInterval = setInterval(() => {
        GameStore.updateCurrentTime()
      }, 1000)
    }
    return () => {
      clearInterval(timeInterval)
    }
  }, [GameSettingsStore.gameMode])

  return (
    <PlayGameContainer>
      {GameStore.currentWord}
      {GameStore.words.length > 0 ? GameStore.currentLetter : null}
      <Track />
      <GameInput />
      {GameStore.currentTime}
      {GameStore.isError ? (
        <ErrorContainer>
          <Error>Error!</Error>
        </ErrorContainer>
      ) : null}
    </PlayGameContainer>
  )
})
