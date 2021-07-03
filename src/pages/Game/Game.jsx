import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from '../../stores/RootStore/RootStoreContext'
import { GameSettings } from './GameSettings/GameSettings'
import { PlayGame } from './PlayGame/PlayGame'
import { Bold, Container } from '../StyledComponents/StyledComponents'

const GameContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  background-color: #ff0;
`
const GameTitle = styled.div`
  font-size: 56px;
  text-align: center;
`

export const Game = observer(() => {
  useEffect(() => {
    GameStore.setRandomWords(150)
  }, [])
  const { AppStore, GameStore, GameSettingsStore } = useStore()
  const history = useHistory()
  if (AppStore.userNickname.length === 0) {
    history.push('/')
  }

  return (
    <GameContainer>
      <GameTitle>
        Welcome to <Bold>typerider</Bold>, {AppStore.userNickname}!
      </GameTitle>
      {GameSettingsStore.gameMode ? <PlayGame /> : <GameSettings />}
    </GameContainer>
  )
})
