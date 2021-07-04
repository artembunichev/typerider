import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../stores/RootStore/RootStoreContext'
import { useHistory } from 'react-router-dom'

const GameSettingsContainer = styled.div`
  width: 22%;
  background-color: #ff0000;
`
const Start = styled.button`
  width: 150px;
  height: 45px;
`
const TimeForRaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TimeForRace = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`
const TimeForRaceItem = styled.button`
  width: 50px;
  color: ${(props) => (props.active ? '#33ff00' : '#000000')};
  &:hover {
    cursor: pointer;
  }
`
const VehicleForRaceContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const VehicleForRace = styled.div`
  width: 95%;
`
const VehicleForRaceButton = styled.button`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 0 5px 0 5px;
  &:hover {
    cursor: pointer;
  }
  background-color: ${(props) => {
    return props.active ? '#bebebe' : '#fff'
  }};
`
const VehicleForRaceImg = styled.img``

export const GameSettings = observer(() => {
  const { GameSettingsStore, ResultStore } = useStore()
  const history = useHistory()
  const startGame = () => {
    GameSettingsStore.setGameMode(true)
    setTimer()
  }
  const setSelectedTime = (time) => {
    GameSettingsStore.setSelectedTime(time)
  }
  const setSelectedVehicle = (vehicle) => {
    GameSettingsStore.setSelectedVehicle(vehicle)
  }
  const setTimer = () => {
    const time = GameSettingsStore.activeTimeForRace
    setTimeout(() => {
      ResultStore.setIsResultReady(true)
      history.push('/result')
      GameSettingsStore.setGameMode(false)
    }, time)
  }
  return (
    <GameSettingsContainer>
      <TimeForRaceContainer>
        How long will your race last?
        <TimeForRace>
          {GameSettingsStore.timeForRace.map((t) => {
            return (
              <TimeForRaceItem active={t.isActive} key={t.time} onClick={() => setSelectedTime(t.time)}>
                {t.label}
              </TimeForRaceItem>
            )
          })}
        </TimeForRace>
      </TimeForRaceContainer>
      <VehicleForRaceContainer>
        <VehicleForRace>
          {GameSettingsStore.vehicles.map((v) => {
            return (
              <VehicleForRaceButton active={v.isActive} key={v.src} onClick={() => setSelectedVehicle(v.src)}>
                <VehicleForRaceImg draggable='false' src={v.src} />
              </VehicleForRaceButton>
            )
          })}
        </VehicleForRace>
      </VehicleForRaceContainer>
      <Start onClick={startGame}>Start Game</Start>
    </GameSettingsContainer>
  )
})
