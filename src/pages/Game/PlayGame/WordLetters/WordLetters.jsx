import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

const WordLetter = styled.span`
  color: ${(props) => {
    return props.completed ? '#15ff00' : '#000000'
  }};
`
const WordLettersContainer = styled.div``
export const WordLetters = observer(() => {
  const { GameStore } = useStore()
  const WordLettersList = GameStore.currentWordLetters.map((letter) => {
    const isLetterCompleted = GameStore.completedLetters.some((id) => id === letter.id)
    return (
      <WordLetter completed={isLetterCompleted} key={letter.id}>
        {letter.letter}
      </WordLetter>
    )
  })
  return <WordLettersContainer>{WordLettersList}</WordLettersContainer>
})
