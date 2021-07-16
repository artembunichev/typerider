import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'

const StyledGameInput = styled.input`
  font-size: 45px;
  width: 650px;
  height: 35px;
`

export const GameInput = observer(() => {
  const { AppStore } = useStore()
  const { PlayGameState, ResultState } = useContext(GameStoreContext)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [AppStore.gameMode])

  const updateWord = () => {
    PlayGameState.clearVehiclePosition()
    PlayGameState.updateCurrentWordIndex()
    PlayGameState.clearCurrentLetterIndex()
    ResultState.updateCorrectWordsCount()
    PlayGameState.clearInputValue()
  }
  const updateLetter = () => {
    PlayGameState.updateVehiclePosition(PlayGameState.currentWordStep)
    PlayGameState.updateCompletedLetters(PlayGameState.currentWordLetters[PlayGameState.currentLetterIndex].id)
    PlayGameState.updateCurrentLetterIndex()
    ResultState.updateSymbolsCount()
    if (PlayGameState.currentLetterIndex >= PlayGameState.currentWordLength) {
      updateWord()
    }
  }
  const updateInputValue = (value) => {
    PlayGameState.updateInputValue(value)
  }
  const checkLetter = (e) => {
    if (!AppStore.gameMode) {
      e.preventDefault()
    } else if (e.nativeEvent.data === PlayGameState.currentLetter) {
      PlayGameState.setIsError(false)
      const value = e.nativeEvent.data
      updateInputValue(value)
      updateLetter()
    } else {
      PlayGameState.setIsError(true)
      ResultState.updateErrorsCount()
      ResultState.setErrorWords(PlayGameState.currentWord)
    }
  }

  return (
    <StyledGameInput
      ref={inputRef}
      onChange={checkLetter}
      disabled={!AppStore.gameMode}
      value={PlayGameState.inputValue}
      autoFocus={AppStore.gameMode}
    />
  )
})
