import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from '../../stores/RootStore/RootStoreContext'

const GameContainer = styled.div`
  flex: 1 0 auto;
  font-size: 50px;
  background-color: #ff0;
`
const GameTitle = styled.div`
  font-size: 56px;
  text-align: center;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`
const GameInput = styled.input`
  font-size: 45px;
  width: 650px;
  height: 35px;
`
export const Bold = styled.span`
  font-weight: bold;
`

export const Game = observer(() => {
  useEffect(() => {
    GameStore.setRandomWords(150)
  }, [])
  const { AppStore, GameStore } = useStore()
  const history = useHistory()
  if (AppStore.userNickname.length === 0) {
    history.push('/')
  }

  const onStartClick = () => {
    GameStore.setGameMode(true)
  }
  const updateWord = () => {
    GameStore.updateCurrentWordIndex()
    GameStore.clearCurrentLetterIndex()
    GameStore.clearInputValue()
  }
  const updateLetter = () => {
    GameStore.updateCurrentLetterIndex()
    if (GameStore.currentLetterIndex >= GameStore.currentWordLength) {
      updateWord()
    }
  }
  const updateInputValue = (value) => {
    GameStore.updateInputValue(value)
  }
  const checkLetter = (e) => {
    if (!GameStore.gameMode) {
      e.preventDefault()
    } else if (e.key === GameStore.currentLetter) {
      GameStore.setIsError(false)
      const value = e.key
      updateInputValue(value)
      updateLetter()
    } else {
      GameStore.setIsError(true)
      GameStore.updateErrorsNumber()
      GameStore.setErrorWords(GameStore.currentWord)
    }
  }

  return (
    <GameContainer>
      <GameTitle>
        Welcome to <Bold>typerider</Bold>, {AppStore.userNickname}!
      </GameTitle>
      {GameStore.gameMode ? null : <Start onClick={onStartClick}>Start Game</Start>}
      {GameStore.currentWord}
      {GameStore.words.length > 0 ? GameStore.currentLetter : null}
      <GameInput disabled={!GameStore.gameMode} onKeyPress={checkLetter} value={GameStore.inputValue} />
    </GameContainer>
  )
})
