/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { GameBlock } from './GameBlock'

const GameListContainer = styled.div`
  display: flex;
  justify-content: center;
`
const GameListWrapper = styled.div`
  @media (max-width: 650px) {
    width: 505px;
  }
  @media (max-width: 540px) {
    width: 470px;
  }
  @media (max-width: 490px) {
    width: 425px;
  }
  @media (max-width: 440px) {
    width: 380px;
  }
  @media (max-width: 390px) {
    width: 345px;
  }
  @media (max-width: 360px) {
    width: 315px;
  }
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
    return (
      <GameBlock key={game.date} game={game} setIsPopup={props.setIsPopup} setGameForDelete={props.setGameForDelete} />
    )
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
