import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const GameContainer = styled.div`
  flex: 1 0 auto;
  background-color: #ff0;
`
const GameTitle = styled.div`
  font-size: 56px;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`
export const Bold = styled.span`
  font-weight: bold;
`

export const Game = observer(() => {
  const { AppStore, GameStore } = useStore()
  const history = useHistory()
  if (AppStore.userNickname.length === 0) {
    history.push('/')
  }

  const onStartClick = () => {
    GameStore.setRandomWords(20)
  }
  const updateWord = () => {
    GameStore.updateCurrentWordIndex()
    GameStore.clearCurrentLetterIndex()
  }
  const updateLetter = () => {
    GameStore.updateCurrentLetterIndex()
    if (GameStore.currentLetterIndex >= GameStore.currentWordLength) {
      updateWord()
    }
  }

  return (
    <GameContainer>
      <GameTitle>
        Welcome to <Bold>typerider</Bold>, {AppStore.userNickname}!
      </GameTitle>
      <Start onClick={onStartClick}>Start Game</Start>
      {GameStore.currentWord}
      <button onClick={updateLetter}>next LETTERR</button>
      {GameStore.words.length > 0 ? GameStore.currentLetter : null}
    </GameContainer>
  )
})
