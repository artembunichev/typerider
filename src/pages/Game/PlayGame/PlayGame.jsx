import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { Container } from '../../StyledComponents/StyledComponents'

const PlayGameContainer = styled(Container)`
  background-color: #1100ff;
`
const GameInput = styled.input`
  font-size: 45px;
  width: 650px;
  height: 35px;
`

export const PlayGame = observer(() => {
  useEffect(() => {
    const time = GameSettingsStore.activeTimeForRace / 1000
    GameStore.setCurrentTime(time)
  }, [])

  const { GameStore, GameSettingsStore, ResultStore } = useStore()
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
    if (!GameSettingsStore.gameMode) {
      e.preventDefault()
    } else if (e.key === GameStore.currentLetter) {
      GameStore.setIsError(false)
      const value = e.key
      updateInputValue(value)
      updateLetter()
    } else {
      GameStore.setIsError(true)
      ResultStore.updateErrorsNumber()
      ResultStore.setErrorWords(GameStore.currentWord)
    }
  }

  return (
    <PlayGameContainer>
      {GameStore.currentWord}
      {GameStore.words.length > 0 ? GameStore.currentLetter : null}
      <GameInput disabled={!GameSettingsStore.gameMode} onKeyPress={checkLetter} value={GameStore.inputValue} />
      {GameStore.currentTime}
    </PlayGameContainer>
  )
})
