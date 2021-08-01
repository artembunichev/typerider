import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore, GameStoreContext } from '../../stores/RootStore/RootStoreContext'
import { Bold, Container, Title } from '../../Components/Styled/StyledComponents'
import { GameSettings } from './GameSettings/GameSettings'
import { PlayGame } from './PlayGame/PlayGame'
import { generateRandomColor } from '../../assets/functions/generateRandomColor'

const GameContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  font-size: 50px;
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

export const Game = observer(() => {
  const { AppStore, GameSettingsStore, HistoryStore } = useStore()
  const { ResultState } = useContext(GameStoreContext)
  useEffect(() => {
    AppStore.setOnPlayGamePage(true)
    const gameDate = Date.now()
    return () => {
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
          Welcome to <Bold>typerider</Bold>, {AppStore.userNickname}!
        </Title>
      </GameTitleContainer>
      <GameSectionContainer>
        <GameSettings />
        <PlayGame />
      </GameSectionContainer>
    </GameContainer>
  )
})
