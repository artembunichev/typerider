import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'
import { ColorInput } from './ColorInput'
import { SettingsMainTitle } from '../../../../../Components/Styled/StyledComponents'

const ColorSettingsContainer = styled.div`
  padding-top: 12px;
`
const ColorInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const ColorInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0px 12px 0px;
  margin: 3px 0;
  border-bottom: 2px solid #fff;
`
const ColorInputTitle = styled.div`
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 1150px) {
    font-size: 23px;
  }
  font-size: 26px;
`

export const ColorSettings = observer(() => {
  const { GameSettingsStore } = useStore()

  const setCompletedLettersColor = (e) => {
    GameSettingsStore.setCompletedLettersColor(e.target.value)
  }
  const setLettersColor = (e) => {
    GameSettingsStore.setLettersColor(e.target.value)
  }
  const setWordBorder = (e) => {
    GameSettingsStore.setWordBorder(e.target.value)
  }
  const setBgcColor = (e) => {
    GameSettingsStore.setLetterBgcColor(e.target.value)
  }

  return (
    <ColorSettingsContainer>
      <SettingsMainTitle>Color Settings</SettingsMainTitle>
      <ColorInputs>
        <ColorInputContainer>
          <ColorInputTitle>Completed Letters</ColorInputTitle>
          <ColorInput setColor={setCompletedLettersColor} colorValue={GameSettingsStore.completedLettersColor} />
        </ColorInputContainer>
        <ColorInputContainer>
          <ColorInputTitle>Uncompleted Letters</ColorInputTitle>
          <ColorInput setColor={setLettersColor} colorValue={GameSettingsStore.lettersColor} />
        </ColorInputContainer>
        <ColorInputContainer>
          <ColorInputTitle>Border</ColorInputTitle>
          <ColorInput setColor={setWordBorder} colorValue={GameSettingsStore.wordBorder} />
        </ColorInputContainer>
        <ColorInputContainer>
          <ColorInputTitle>Background</ColorInputTitle>
          <ColorInput setColor={setBgcColor} colorValue={GameSettingsStore.letterBgcColor} />
        </ColorInputContainer>
      </ColorInputs>
    </ColorSettingsContainer>
  )
})
