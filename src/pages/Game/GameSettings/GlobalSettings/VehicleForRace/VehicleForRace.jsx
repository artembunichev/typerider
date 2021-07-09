import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext';

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
  const GameStore = useContext(GameStoreContext)

  const setSelectedVehicle = (vehicle) => {
    GameStore.setSelectedVehicle(vehicle)
  }
  const VehicleForRaceItems = GameStore.vehicles.map((v) => {
    return (
      <VehicleForRaceButton disabled={GameStore.gameMode} active={v.isActive} key={v.src} onClick={() => setSelectedVehicle(v.src)}>
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
