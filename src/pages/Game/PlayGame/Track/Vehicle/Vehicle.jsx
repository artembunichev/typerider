import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../../stores/RootStore/RootStoreContext'

const StyledVehicle = styled.div`
  position: relative;
  top: ${(props) => {
    return props.model === 'motorbike'
      ? `${props.width / 4.2}px`
      : props.model === 'taxi'
      ? `${props.width / 3.2}px`
      : `${props.width / 2.87}px`
  }};
  width: ${(props) => {
    return `${props.width}px`
  }};
  height: ${(props) => {
    return `${props.width}px`
  }};
  background-image: ${(props) => {
    return `url('${props.src}')`
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
      src={GameSettingsStore.activeVehicleSrc}
      width={PlayGameState.vehicleWidth}
    />
  )
})
