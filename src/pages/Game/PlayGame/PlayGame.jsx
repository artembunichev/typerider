import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { GameInput } from './GameInput/GameInput'
import { Track } from './Track/Track'
import { Timer } from './Timer/Timer'
import { WordLetters } from './WordLetters/WordLetters'
import { Error } from './Error/Error'

const PlayGameContainer = styled.div`
  background-color: #1100ff;
  width: 78%;
`

export const PlayGame = observer(() => {
  const { GameStore, GameSettingsStore } = useStore()

  return (
    <PlayGameContainer>
      {GameSettingsStore.gameMode ? (
        <WordLetters wordLetters={GameStore.currentWordLetters} arrayOfCompletedLetters={GameStore.completedLetters} />
      ) : (
        'Words are hidden before the race'
      )}
      <Track />
      <GameInput />
      <Timer />
      {GameStore.isError ? <Error /> : null}
    </PlayGameContainer>
  )
})
