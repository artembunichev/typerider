import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'

export const Timer = observer(() => {
  const { AppStore } = useStore()
  const { PlayGameState, GameSettingsState } = useContext(GameStoreContext)

  useEffect(() => {
    const time = GameSettingsState.activeTimeForRace / 1000
    PlayGameState.setCurrentTime(time)
  }, [GameSettingsState.activeTimeForRace])

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

  return <>{PlayGameState.currentTime}</>
})
