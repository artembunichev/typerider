import React, { useEffect, useState } from 'react'
import { GameStoreContext, useStore } from '../../stores/RootStore/RootStoreContext'
import { useHistory } from 'react-router-dom'
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

  const history = useHistory()

  if (AppStore.userNickname.length === 0) {
    history.push('/')
  }

  return (
    <>
      <GameStoreContext.Provider value={gameStore}>
        {gameStore.ResultState.isResultReady ? <Result /> : <Game />}
      </GameStoreContext.Provider>
    </>
  )
})
