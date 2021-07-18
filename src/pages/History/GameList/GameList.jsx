/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
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
  max-height: 671px;
  overflow-y: ${(props) => (props.listHeight > 670 ? 'scroll' : 'auto')};
  padding: 5px;
  border-radius: 6px;
`

export const GameList = (props) => {
  const [listHeight, setListHeight] = useState(0)
  const gameListRef = useRef(null)
  useEffect(() => {
    setListHeight(gameListRef.current.offsetHeight)
  }, [gameListRef.current])

  const GameListItems = props.sortedHistory.map((game) => {
    return <GameBlock key={game.date} game={game} />
  })

  return (
    <GameListContainer>
      <GameListWrapper>
        <StyledGameList ref={gameListRef} listHeight={listHeight}>
          {GameListItems}
        </StyledGameList>
      </GameListWrapper>
    </GameListContainer>
  )
}
