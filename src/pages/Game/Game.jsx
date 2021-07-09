import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { Bold, Container } from '../Components/Styled/StyledComponents'
import { GameSettings } from './GameSettings/GameSettings'
import { PlayGame } from './PlayGame/PlayGame'

const GameContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  background-color: #ff0;
`
const GameSectionContainer = styled(Container)`
  display: flex;
`
const GameTitle = styled.div`
  font-size: 56px;
  text-align: center;
`
export const Game = observer(() => {
  const { AppStore } = useStore()
  return (
    <GameContainer>
      <GameTitle>
        Welcome to <Bold>typerider</Bold>, {AppStore.userNickname}!
      </GameTitle>
      <GameSectionContainer>
        <GameSettings />
        <PlayGame />
      </GameSectionContainer>
    </GameContainer>
  )
})
