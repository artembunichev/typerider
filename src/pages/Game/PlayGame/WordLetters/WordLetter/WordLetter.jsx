/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext';

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
  const GameStore = useContext(GameStoreContext)
  return (
    <WordLetterContainer completed={props.completed} letterBgc={GameStore.letterBgcColor}>
      <WordLetterWrapper
        completed={props.completed}
        lettersColor={GameStore.lettersColor}
        completedLettersColor={GameStore.completedLettersColor}>
        {props.letter}
      </WordLetterWrapper>
    </WordLetterContainer>
  )
})
