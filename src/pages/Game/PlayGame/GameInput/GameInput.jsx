import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../stores/RootStore/RootStoreContext';


const StyledGameInput = styled.input`
  font-size: 45px;
  width: 650px;
  height: 35px;
`

export const GameInput = observer(() => {
  const GameStore = useContext(GameStoreContext)
  const updateWord = () => {
    GameStore.clearVehiclePosition()
    GameStore.updateCurrentWordIndex()
    GameStore.clearCurrentLetterIndex()
    GameStore.updateCorrectWordsCount()
    GameStore.clearInputValue()
  }
  const updateLetter = () => {
    GameStore.updateVehiclePosition(GameStore.currentWordStep)
    GameStore.updateCompletedLetters(GameStore.currentWordLetters[GameStore.currentLetterIndex].id)
    GameStore.updateCurrentLetterIndex()
    GameStore.updateSymbolsCount()
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
    } else if (e.nativeEvent.data === GameStore.currentLetter) {
      GameStore.setIsError(false)
      const value = e.nativeEvent.data
      updateInputValue(value)
      updateLetter()
    } else {
      GameStore.setIsError(true)
      GameStore.updateErrorsCount()
      GameStore.setErrorWords(GameStore.currentWord)
    }
  }

  return <StyledGameInput onChange={checkLetter} disabled={!GameStore.gameMode} value={GameStore.inputValue} />
})
