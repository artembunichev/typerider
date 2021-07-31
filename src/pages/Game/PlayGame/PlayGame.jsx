import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { GameInput } from './GameInput'
import { Track } from './Track/Track'
import { Timer } from './Timer'
import { WordLetters } from './WordLetters/WordLetters'
import { Error } from './Error'
import { GameStoreContext, useStore } from '../../../stores/RootStore/RootStoreContext'
import { Bold } from '../../../Components/Styled/StyledComponents'

const PlayGameContainer = styled.div`
  background-color: inherit;
  flex: 1 1 auto;
  padding: 25px 60px 25px 25px;
`
const PlaceForWords = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const RaceWords = styled.div`
  position: absolute;
`
const WordsAreHidden = styled.div`
  text-align: center;
`

export const PlayGame = observer(() => {
  const { AppStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)
  const [isFlagJumping, setIsFlagJumping] = useState(false)

  return (
    <PlayGameContainer>
      <PlaceForWords>
        <RaceWords>
          {AppStore.gameMode ? (
            <WordLetters wordObject={PlayGameState.currentWordObject} fz={'66px'} />
          ) : (
            <WordsAreHidden>
              <Bold>Words are hidden before the race!</Bold>
            </WordsAreHidden>
          )}
        </RaceWords>
      </PlaceForWords>
      <Track isFlagJumping={isFlagJumping} />
      <GameInput setIsFlagJumping={setIsFlagJumping} />
      <Timer />
      {PlayGameState.isError ? <Error /> : null}
    </PlayGameContainer>
  )
})
