/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { GameBlock } from './GameBlock/GameBlock'

const GameListContainer = styled.div`
  display: flex;
  justify-content: center;
`
const GameListWrapper = styled.div`
  width: 584px;
  display: flex;
  justify-content: center;
`
const StyledGameList = styled.div`
  width: 100%;
  height: 674px;
  overflow-y: ${(props) => (props.listLength > 3 ? 'scroll' : 'hidden')};
  padding: 5px;
  border-radius: 6px;
`

export const GameList = (props) => {
  const GameListItems = props.sortedHistory.map((game) => {
    return <GameBlock key={game.date} game={game} />
  })

  const listLength = props.sortedHistory.length

  return (
    <GameListContainer>
      <GameListWrapper>
        <StyledGameList listLength={listLength}>{GameListItems}</StyledGameList>
      </GameListWrapper>
    </GameListContainer>
  )
}
