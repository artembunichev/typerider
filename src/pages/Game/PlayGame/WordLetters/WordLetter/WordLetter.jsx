/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext';

const WordLetterContainer = styled.div.attrs((props) => ({
  style: {
    background: props.completed ? `${props.letterBgc}` : 'transparent',
  },
}))`
  display: inline-block;
`
const WordLetterWrapper = styled.span.attrs((props) => ({
  style: {
    color: props.completed ? props.completedLettersColor : props.lettersColor,
  },
}))``

export const WordLetter = observer((props) => {
  const { GameSettingsStore } = useStore()

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
