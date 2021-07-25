/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const WordLetterContainer = styled.div`
  display: inline-block;
`
const WordLetterWrapper = styled.span``

export const WordLetter = observer((props) => {
  const { GameSettingsStore } = useStore()

  const wordLetterColor = {
    color: props.completed ? GameSettingsStore.completedLettersColor : GameSettingsStore.lettersColor,
  }
  const wordLetterBgc = {
    background: props.completed ? GameSettingsStore.letterBgcColor : 'transparent',
  }

  return (
    <WordLetterContainer style={wordLetterBgc}>
      <WordLetterWrapper style={wordLetterColor}>{props.letter}</WordLetterWrapper>
    </WordLetterContainer>
  )
})
