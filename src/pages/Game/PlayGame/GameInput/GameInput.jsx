import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

const StyledGameInput = styled.input`
  font-size: 45px;
  width: 650px;
  height: 35px;
`

export const GameInput = observer(() => {
  const { GameSettingsStore, GameStore, ResultStore } = useStore()

  const updateWord = () => {
    GameStore.updateCurrentWordIndex()
    GameStore.clearCurrentLetterIndex()
    GameStore.clearInputValue()
  }
  const updateLetter = () => {
    GameStore.updateCurrentLetterIndex()
    ResultStore.updateSymbolsCount()
    if (GameStore.currentLetterIndex >= GameStore.currentWordLength) {
      updateWord()
    }
  }
  const updateInputValue = (value) => {
    GameStore.updateInputValue(value)
  }
  const checkLetter = (e) => {
    if (!GameSettingsStore.gameMode) {
      e.preventDefault()
    } else if (e.key === GameStore.currentLetter) {
      GameStore.setIsError(false)
      const value = e.key
      updateInputValue(value)
      updateLetter()
    } else {
      GameStore.setIsError(true)
      ResultStore.updateErrorsCount()
      ResultStore.setErrorWords(GameStore.currentWord)
    }
  }

  return <StyledGameInput disabled={!GameSettingsStore.gameMode} onKeyPress={checkLetter} value={GameStore.inputValue} />
})
