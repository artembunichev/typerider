import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore, GameStoreContext } from '../../stores/RootStore/RootStoreContext'
import { Container, Title } from '../../components/styled/styledComponents'
import { GameSettings } from './GameSettings/GameSettings'
import { PlayGame } from './PlayGame/PlayGame'
import { generateRandomColor } from '../../assets/functions/generateRandomColor'
import { useHistory } from 'react-router-dom'

const GameContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: #4e6375;
`
const GameSectionContainer = styled(Container)`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  color: #fff;
`
const GameTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`
const TyperiderTitle = styled.span`
  font-family: 'Courgette', cursive;
`

export const Game = observer(() => {
  const { AppStore, GameSettingsStore, HistoryStore } = useStore()
  const { PlayGameState, ResultState } = useContext(GameStoreContext)
  const history = useHistory()

  if (AppStore.userNickname.length === 0) {
    history.push('/')
  }
  useEffect(() => {
    AppStore.setOnPlayGamePage(true)
    const gameDate = Date.now()
    return () => {
      PlayGameState.setIsPreparing(false)
      AppStore.setGameMode(false)
      AppStore.setOnPlayGamePage(false)
      if (ResultState.isResultReady) {
        const GameForHistory = {
          userNickname: AppStore.userNickname,
          vehicle: GameSettingsStore.activeVehicleSrc,
          errorsCount: ResultState.errorsCount,
          correctWordsCount: ResultState.correctWordsCount,
          typeSpeed: ResultState.typeSpeed,
          raceTime: GameSettingsStore.activeTimeForRaceInSeconds,
          date: gameDate,
          color: generateRandomColor(),
        }
        HistoryStore.updateGameHistory(GameForHistory)
      }
    }
  }, [])

  return (
    <GameContainer>
      <GameTitleContainer>
        <Title>
          Welcome to <TyperiderTitle>typerider</TyperiderTitle>, {AppStore.userNickname}!
        </Title>
      </GameTitleContainer>
      <GameSectionContainer>
        <GameSettings />
        <PlayGame />
      </GameSectionContainer>
    </GameContainer>
  )
})
