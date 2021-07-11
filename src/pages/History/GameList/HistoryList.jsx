import React from 'react'
import styled from 'styled-components'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { GameBlock } from './GameBlock/HistoryGameBlock'

const GameListContainer = styled.div``

export const GameList = () => {
  const { AppStore } = useStore()

  const HistoryListItems = AppStore.gameHistory.map((game) => {
    return <GameBlock key={game.date} game={game} />
  })

  return <GameListContainer>{HistoryListItems}</GameListContainer>
}
