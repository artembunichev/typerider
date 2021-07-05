import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const StyledVehicle = styled.div`
  position: relative;
  top: ${(props) => {
    return props.model === 'motorbike'
      ? `${props.width / 4.2}px`
      : props.model === 'taxi'
      ? `${props.width / 3.2}px`
      : `${props.width / 2.87}px`
  }};
  left: ${(props) => {
    return `${props.left}px`
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
  const { GameStore, GameSettingsStore } = useStore()

  return (
    <StyledVehicle
      model={props.model}
      src={GameSettingsStore.activeVehicleSrc}
      left={GameStore.vehiclePosition}
      width={GameStore.vehicleWidth}
    />
  )
})
