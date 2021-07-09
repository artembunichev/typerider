import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { GameStoreContext } from '../../../../stores/RootStore/RootStoreContext';

export const Timer = observer(() => {
  const GameStore = useContext(GameStoreContext)

  useEffect(() => {
    const time = GameStore.activeTimeForRace / 1000
    GameStore.setCurrentTime(time)
  }, [GameStore.activeTimeForRace])

  useEffect(() => {
    let timeInterval
    if (GameStore.gameMode) {
      timeInterval = setInterval(() => {
        GameStore.updateCurrentTime()
      }, 1000)
    }
    return () => {
      clearInterval(timeInterval)
    }
  }, [GameStore.gameMode])

  return <>{GameStore.currentTime}</>
})
