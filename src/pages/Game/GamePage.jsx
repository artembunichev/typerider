import React, { useEffect } from 'react'
import { GameStoreContext, useStore } from '../../stores/RootStore/RootStoreContext'
import { useHistory } from 'react-router-dom'
import { Result } from './Result/Result'
import { Game } from './Game'
import { observer, useLocalObservable } from 'mobx-react-lite'

export const GamePage = observer(() => {
  const { AppStore, createGameStore } = useStore()
  const gameStore = useLocalObservable(createGameStore)
  useEffect(() => {
    gameStore.PlayGameState.setRandomWords()
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
