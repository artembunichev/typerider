/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const WordLetterContainer = styled.div`
  display: inline-block;
  background-color: ${(props) => {
    return props.completed ? '#15ff00' : 'transparent'
  }};
`
const WordLetterWrapper = styled.span`
  color: ${(props) => {
    return props.completed ? props.completedLettersColor : props.lettersColor
  }};
`

export const WordLetter = observer((props) => {
  const { GameSettingsStore } = useStore()

  return (
    <WordLetterContainer completed={props.completed}>
      <WordLetterWrapper
        completed={props.completed}
        lettersColor={GameSettingsStore.lettersColor}
        completedLettersColor={GameSettingsStore.completedLettersColor}>
        {props.letter}
      </WordLetterWrapper>
    </WordLetterContainer>
  )
})
