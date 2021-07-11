/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { GameBlock } from './GameBlock/GameBlock'

const GameListContainer = styled.div``

export const GameList = (props) => {
  const GameListItems = props.sortedHistory.map((game) => {
    return <GameBlock key={game.date} game={game} />
  })

  return <GameListContainer>{GameListItems}</GameListContainer>
}
