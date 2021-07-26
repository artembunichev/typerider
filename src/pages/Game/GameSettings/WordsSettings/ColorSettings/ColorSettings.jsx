import React from 'react'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'
import { ColorInput } from './ColorInput'

const ColorSettingsContainer = styled.div``

export const ColorSettings = () => {
  const { GameSettingsStore } = useStore()

  const setCompletedLettersColor = (e) => {
    GameSettingsStore.setCompletedLettersColor(e.target.value)
  }
  const setBgcColor = (e) => {
    GameSettingsStore.setLetterBgcColor(e.target.value)
  }
  const setLettersColor = (e) => {
    GameSettingsStore.setLettersColor(e.target.value)
  }
  const setWordBorder = (e) => {
    GameSettingsStore.setWordBorder(e.target.value)
  }

  return (
    <ColorSettingsContainer>
      Color Settings
      <ColorInput setColor={setCompletedLettersColor} colorValue={GameSettingsStore.completedLettersColor} />
      <ColorInput setColor={setLettersColor} colorValue={GameSettingsStore.lettersColor} />
      <ColorInput setColor={setWordBorder} colorValue={GameSettingsStore.wordsBgcColor} />
      <ColorInput setColor={setBgcColor} colorValue={GameSettingsStore.letterBgcColor} />
    </ColorSettingsContainer>
  )
}
