import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { GameStoreContext } from '../../../../stores/RootStore/RootStoreContext'

export const Timer = observer(() => {
  const { PlayGameState, GameSettingsState } = useContext(GameStoreContext)

  useEffect(() => {
    const time = GameSettingsState.activeTimeForRace / 1000
    PlayGameState.setCurrentTime(time)
  }, [GameSettingsState.activeTimeForRace])

  useEffect(() => {
    let timeInterval
    if (GameSettingsState.gameMode) {
      timeInterval = setInterval(() => {
        PlayGameState.updateCurrentTime()
      }, 1000)
    }
    return () => {
      clearInterval(timeInterval)
    }
  }, [GameSettingsState.gameMode])

  return <>{PlayGameState.currentTime}</>
})
