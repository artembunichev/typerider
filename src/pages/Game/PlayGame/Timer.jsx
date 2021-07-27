import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore, GameStoreContext } from '../../../stores/RootStore/RootStoreContext'

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

  return <>{PlayGameState.currentTime}</>
})
