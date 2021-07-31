import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { WordsSettings } from './WordsSettings/WordsSettings'
import { GlobalSettings } from './GlobalSettings/GlobalSettings'
import { GameStoreContext, useStore } from '../../../stores/RootStore/RootStoreContext'
import { SettingsButton } from '../../../Components/Styled/StyledComponents'

const GameSettingsContainer = styled.div`
  max-height: 750px;
  @media (max-width: 1150px) {
    padding: 20px 17px 10px 17px;
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
  padding-top: 10px;
`
const Start = styled(SettingsButton)`
  @media (max-width: 1400px) {
    font-size: 23px;
    width: 183px;
    height: 37.5px;
  }
  font-size: 26px;
  width: 220px;
  height: 45px;
  background-color: ${(props) => props.disabled && '#888888'};
  transition: background-color 0.33s;
  &:hover {
    background-color: #888888;
  }
`

export const GameSettings = observer(() => {
  const { AppStore, GameSettingsStore } = useStore()
  const { ResultState } = useContext(GameStoreContext)

  const startGame = () => {
    AppStore.setGameMode(true)
    setTimer()
  }
  const setTimer = () => {
    const time = GameSettingsStore.activeTimeForRace
    setTimeout(() => {
      ResultState.setIsResultReady(true)
      AppStore.setGameMode(false)
    }, time)
  }

  return (
    <GameSettingsContainer>
      <GlobalSettings />
      <WordsSettings />
      <StartContainer>
        <Start onClick={startGame} disabled={AppStore.gameMode}>
          Start Game
        </Start>
      </StartContainer>
    </GameSettingsContainer>
  )
})
