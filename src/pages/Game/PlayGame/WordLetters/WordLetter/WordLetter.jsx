/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const WordLetterContainer = styled.div`
  display: inline-block;
  background-color: ${(props) => {
    return props.completed ? `${props.letterBgc}` : 'transparent'
  }};
`
const WordLetterWrapper = styled.span`
  color: ${(props) => {
    return props.completed ? props.completedLettersColor : props.lettersColor
  }};
`

export const WordLetter = observer((props) => {
  const { GameSettingsStore } = useStore()
  console.log(GameSettingsStore.letterBgcColor)
  return (
    <WordLetterContainer completed={props.completed} letterBgc={GameSettingsStore.letterBgcColor}>
      <WordLetterWrapper
        completed={props.completed}
        lettersColor={GameSettingsStore.lettersColor}
        completedLettersColor={GameSettingsStore.completedLettersColor}>
        {props.letter}
      </WordLetterWrapper>
    </WordLetterContainer>
  )
})
