import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../../stores/RootStore/RootStoreContext'

const VehicleForRaceContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const VehicleForRaceList = styled.div`
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

export const VehicleForRace = observer(() => {
  const { AppStore } = useStore()
  const { GameSettingsState } = useContext(GameStoreContext)

  const setSelectedVehicle = (vehicle) => {
    GameSettingsState.setSelectedVehicle(vehicle)
  }
  const VehicleForRaceItems = GameSettingsState.vehicles.map((v) => {
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
