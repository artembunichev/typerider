import React from 'react'
import styled from 'styled-components'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { GameBlock } from './GameBlock/GameBlock'

const GameListContainer = styled.div``

export const GameList = () => {
  const { HistoryStore } = useStore()

  const GameListItems = HistoryStore.gameHistory.map((game) => {
    return <GameBlock key={game.date} game={game} />
  })

  return <GameListContainer>{GameListItems}</GameListContainer>
}
