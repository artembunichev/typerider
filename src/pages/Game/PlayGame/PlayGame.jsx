import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { GameInput } from './GameInput/GameInput'
import { Track } from './Track/Track'
import { Timer } from './Timer/Timer'
import { WordLetters } from './WordLetters/WordLetters'
import { Error } from './Error/Error'
import { GameStoreContext } from '../../../stores/RootStore/RootStoreContext';

const PlayGameContainer = styled.div`
  background-color: #1100ff;
  width: 78%;
`

export const PlayGame = observer(() => {
  const GameStore = useContext(GameStoreContext)

  return (
    <PlayGameContainer>
      {GameStore.gameMode ? <WordLetters wordObject={GameStore.currentWordObject} /> : 'Words are hidden before the race'}
      <Track />
      <GameInput />
      <Timer />
      {GameStore.isError ? <Error /> : null}
    </PlayGameContainer>
  )
})
