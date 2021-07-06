import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { GameInput } from './GameInput/GameInput'
import { Track } from './Track/Track'
import { Timer } from './Timer/Timer'

const PlayGameContainer = styled.div`
  background-color: #1100ff;
  width: 78%;
`
const ErrorContainer = styled.div`
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Error = styled.span`
  font-size: 24px;
`
const WordLetter = styled.span`
  color: ${(props) => {
    return props.completed ? '#15ff00' : '#000000'
  }};
`

export const PlayGame = observer(() => {
  const { GameStore } = useStore()

  return (
    <PlayGameContainer>
      {GameStore.currentWordLetters.map((letter) => {
        const isLetterCompleted = GameStore.completedLetters.some((id) => id === letter.id)
        return (
          <WordLetter completed={isLetterCompleted} key={letter.id}>
            {letter.letter}
          </WordLetter>
        )
      })}
      {GameStore.words.length > 0 ? GameStore.currentLetter : null}
      <Track />
      <GameInput />
      <Timer />
      {GameStore.isError ? (
        <ErrorContainer>
          <Error>Error!</Error>
        </ErrorContainer>
      ) : null}
    </PlayGameContainer>
  )
})
