import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { GameInput } from './GameInput/GameInput'
import { Track } from './Track/Track'
import { Timer } from './Timer/Timer'
import { WordLetters } from './WordLetters/WordLetters'
import { Error } from './Error/Error'
import { GameStoreContext, useStore } from '../../../stores/RootStore/RootStoreContext'

const PlayGameContainer = styled.div`
  background-color: #1100ff;
  width: 78%;
`

export const PlayGame = observer(() => {
  const { AppStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)

  return (
    <PlayGameContainer>
      {AppStore.gameMode ? (
        <WordLetters wordObject={PlayGameState.currentWordObject} />
      ) : (
        'Words are hidden before the race'
      )}
      <Track />
      <GameInput />
      <Timer />
      {PlayGameState.isError ? <Error /> : null}
    </PlayGameContainer>
  )
})
