import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const VehicleForRaceContainer = styled.div`
  padding: 9px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const VehicleForRaceList = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
`
const VehicleForRaceButton = styled.button`
  @media (max-width: 1400px) {
    width: 84px;
    height: 84px;
  }
  width: 90px;
  height: 90px;
  padding: 10px 10px 0 10px;
  border-radius: 5px;
  margin: 2.5px 5px 2.5px 5px;
  background-color: ${(props) => {
    return props.active ? '#4e6375' : '#fff'
  }};
`
const VehicleForRaceImg = styled.img``

export const VehicleForRace = observer(() => {
  const { AppStore, GameSettingsStore } = useStore()

  const setSelectedVehicle = (vehicle) => {
    GameSettingsStore.setSelectedVehicle(vehicle)
  }
  const VehicleForRaceItems = GameSettingsStore.vehicles.map((v) => {
    return (
      <VehicleForRaceButton
        disabled={AppStore.gameMode}
        active={v.isActive}
        key={v.src}
        onClick={() => setSelectedVehicle(v.src)}>
        <VehicleForRaceImg draggable='false' src={v.src} />
      </VehicleForRaceButton>
    )
  })

  return (
    <VehicleForRaceContainer>
      <VehicleForRaceList>{VehicleForRaceItems}</VehicleForRaceList>
    </VehicleForRaceContainer>
  )
})
