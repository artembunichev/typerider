import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../stores/RootStore/RootStoreContext'

const GameInputContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledGameInput = styled.input`
  font-size: 35px;
  @media (max-width: 1400px) {
    width: 600px;
  }
  @media (max-width: 1150px) {
    width: 540px;
  }
  width: 700px;
  padding: 8px;
  border-radius: 11px;
`

export const GameInput = observer(({ setIsFlagJumping }) => {
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
    setIsFlagJumping(true)
    setTimeout(() => {
      setIsFlagJumping(false)
    }, 300)
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
      ResultState.setErrorWords(
        {
          name: PlayGameState.currentWord,
          letters: PlayGameState.currentWordLetters.map((letter) => {
            return {
              ...letter,
              isError: false,
            }
          }),
        },
        PlayGameState.currentWordLetters[PlayGameState.currentLetterIndex]
      )
    }
  }

  return (
    <GameInputContainer>
      <StyledGameInput
        ref={inputRef}
        onChange={checkLetter}
        disabled={!AppStore.gameMode}
        value={PlayGameState.inputValue}
        autoFocus={AppStore.gameMode}
      />
    </GameInputContainer>
  )
})
