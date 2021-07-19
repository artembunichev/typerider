/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

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
  const { GameSettingsState } = useContext(GameStoreContext)
  return (
    <WordLetterContainer completed={props.completed} letterBgc={GameSettingsState.letterBgcColor}>
      <WordLetterWrapper
        completed={props.completed}
        lettersColor={GameSettingsState.lettersColor}
        completedLettersColor={GameSettingsState.completedLettersColor}>
        {props.letter}
      </WordLetterWrapper>
    </WordLetterContainer>
  )
})
