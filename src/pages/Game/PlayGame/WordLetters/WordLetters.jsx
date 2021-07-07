import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'
import { WordLetter } from './WordLetter/WordLetter'

export const WordLettersContainer = styled.div`
  border: 6px solid #ffa600;
  border-radius: 10px;
  text-align: center;
`

export const WordLetters = observer(() => {
  const { GameStore } = useStore()
  const WordLettersList = GameStore.currentWordLetters.map((letter) => {
    const isLetterCompleted = GameStore.completedLetters.some((id) => id === letter.id)
    return <WordLetter completed={isLetterCompleted} key={letter.id} letter={letter.letter} />
  })
  return <WordLettersContainer>{WordLettersList}</WordLettersContainer>
})
