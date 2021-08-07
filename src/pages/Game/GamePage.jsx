import React, { useEffect, useState } from 'react'
import { GameStoreContext, useStore } from '../../stores/RootStore/RootStoreContext'
import { Result } from './Result/Result'
import { observer } from 'mobx-react-lite'
import { Game } from './Game'

export const GamePage = observer(() => {
  const { AppStore, createGameStore } = useStore()
  const [gameStore] = useState(createGameStore)
  useEffect(() => {
    gameStore.PlayGameState.setRandomWords()
    return () => {
      AppStore.setUserNickname('')
    }
  }, [])

  return (
    <>
      <GameStoreContext.Provider value={gameStore}>
        {gameStore.ResultState.isResultReady ? <Result /> : <Game />}
      </GameStoreContext.Provider>
    </>
  )
})
