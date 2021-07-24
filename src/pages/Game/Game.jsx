import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore, GameStoreContext } from '../../stores/RootStore/RootStoreContext'
import { Bold, Container } from '../../Components/Styled/StyledComponents'
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
        }
        HistoryStore.updateGameHistory(GameForHistory)
      }
    }
  }, [])

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
