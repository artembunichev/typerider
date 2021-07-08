import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'
import { WordLetter } from './WordLetter/WordLetter'

export const WordLettersWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const WordLettersContainer = styled.div`
  display: inline-block;
  border-width: 6px;
  border-style: solid;
  border-color: ${(props) => {
    return props.wordBorder
  }};
  border-radius: 10px;
  text-align: center;
`

export const WordLetters = observer(() => {
  const { GameStore, GameSettingsStore } = useStore()
  const WordLettersList = GameStore.currentWordLetters.map((letter) => {
    const isLetterCompleted = GameStore.completedLetters.some((id) => id === letter.id)
    return <WordLetter completed={isLetterCompleted} key={letter.id} letter={letter.letter} />
  })
  return (
    <WordLettersWrapper>
      <WordLettersContainer wordBorder={GameSettingsStore.wordBorder}>{WordLettersList}</WordLettersContainer>
    </WordLettersWrapper>
  )
})
