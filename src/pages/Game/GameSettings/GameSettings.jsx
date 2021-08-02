import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { WordsSettings } from './WordsSettings/WordsSettings'
import { GlobalSettings } from './GlobalSettings/GlobalSettings'
import { GameStoreContext, useStore } from '../../../stores/RootStore/RootStoreContext'
import { StartButton } from '../../../Components/Styled/StyledComponents'

const GameSettingsWrapper = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`
const GameSettingsContainer = styled.div`
  max-height: 750px;
  @media (max-width: 1150px) {
    padding: 20px 17px 10px 17px;
  }
  @media (max-width: 1000px) {
    margin: 15px;
    width: 560px;
  }
  padding: 20px 25px 10px 25px;
  background-color: #384653;
  border-radius: 12px;
  margin: 15px 0 15px 15px;
  overflow-y: auto;
`
const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 15px 0;
`
const Start = styled(StartButton)`
  @media (max-width: 1400px) {
    font-size: 23px;
    width: 183px;
    height: 37.5px;
  }
  @media (max-width: 490px) {
    font-size: 18px;
    width: 140px;
    height: 28.8px;
  }
  font-size: 26px;
  width: 220px;
  height: 45px;
  color: ${(props) => props.disabled && '#ffffff'};
  background-color: ${(props) => props.disabled && '#ff820d'};
`

export const GameSettings = observer(() => {
  const { AppStore, GameSettingsStore } = useStore()
  const { PlayGameState, ResultState } = useContext(GameStoreContext)

  const startGame = () => {
    PlayGameState.setIsPreparing(true)
    if (PlayGameState.length !== 0) {
      PlayGameState.setVisibleNumber(PlayGameState.currentNumber)
      const interval = setInterval(() => {
        if (PlayGameState.currentTimeIndex === PlayGameState.timeArray.length - 1) {
          AppStore.setGameMode(true)
          PlayGameState.setIsPreparing(false)
          clearInterval(interval)
          setTimer()
        } else {
          PlayGameState.setCurrentTimeIndex()
          PlayGameState.setVisibleNumber(PlayGameState.currentNumber)
        }
      }, 1500)
    }
  }
  const setTimer = () => {
    const time = GameSettingsStore.activeTimeForRace
    setTimeout(() => {
      ResultState.setIsResultReady(true)
      AppStore.setGameMode(false)
    }, time)
  }

  return (
    <GameSettingsWrapper>
      <GameSettingsContainer>
        <GlobalSettings />
        <WordsSettings />
        <StartContainer>
          <Start onClick={startGame} disabled={AppStore.gameMode}>
            Start Game
          </Start>
        </StartContainer>
      </GameSettingsContainer>
    </GameSettingsWrapper>
  )
})
