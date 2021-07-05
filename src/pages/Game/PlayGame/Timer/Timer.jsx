import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

export const Timer = observer(() => {
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
  return <>{GameStore.currentTime}</>
})

