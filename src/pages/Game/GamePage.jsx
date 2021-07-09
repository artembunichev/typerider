import React, { useEffect, useState } from 'react'
import { GameStoreContext, useStore } from '../../stores/RootStore/RootStoreContext'
import { GameStore } from '../../stores/GameStore'
import { useHistory } from 'react-router-dom'
import { Result } from './Result/Result'
import { Game } from './Game'
import { observer } from 'mobx-react-lite'

export const GamePage = observer(() => {
  const { AppStore } = useStore()
  const [gameStore] = useState(() => new GameStore())
  useEffect(() => {
    gameStore.setRandomWords(150)
  }, [])
  const history = useHistory()
  if (AppStore.userNickname.length === 0) {
    history.push('/')
  }
  return (
    <>
      <GameStoreContext.Provider value={gameStore}>{gameStore.isResultReady ? <Result /> : <Game />}</GameStoreContext.Provider>
    </>
  )
})
