import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'

const StyledVehicle = styled.div`
  position: relative;
  top: ${(props) => {
    return props.model === 'motorbike'
      ? `${props.vehicleWidth / 4.2}px`
      : props.model === 'taxi'
      ? `${props.vehicleWidth / 3.2}px`
      : `${props.vehicleWidth / 2.87}px`
  }};
  width: ${(props) => {
    return `${props.vehicleWidth}px`
  }};
  height: ${(props) => {
    return `${props.vehicleWidth}px`
  }};
  background-image: ${(props) => {
    return `url('${props.vehicle}')`
  }};
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.33s ease all;
`

export const Vehicle = observer((props) => {
  const { GameSettingsStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)

  return (
    <StyledVehicle
      style={{
        left: `${PlayGameState.vehiclePosition}px`,
      }}
      model={props.model}
      vehicle={GameSettingsStore.activeVehicleSrc}
      vehicleWidth={PlayGameState.vehicleWidth}
    />
  )
})
