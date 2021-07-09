import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { WordLetter } from './WordLetter/WordLetter'
import { GameStoreContext } from '../../../../stores/RootStore/RootStoreContext';

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

export const WordLetters = observer((props) => {
  const GameStore = useContext(GameStoreContext)
  const wordObject = props.wordObject
  const WordLettersList = wordObject.wordLetters.map((letter) => {
    const isLetterCompleted = wordObject.arrayOfCompletedLetters.some((id) => id === letter.id)
    return <WordLetter completed={isLetterCompleted} key={letter.id} letter={letter.letter} />
  })
  return (
    <WordLettersWrapper>
      <WordLettersContainer wordBorder={GameStore.wordBorder}>{WordLettersList}</WordLettersContainer>
    </WordLettersWrapper>
  )
})
