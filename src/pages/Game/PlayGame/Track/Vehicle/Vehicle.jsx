import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext'

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
  const { PlayGameState, GameSettingsState } = useContext(GameStoreContext)

  return (
    <StyledVehicle
      model={props.model}
      src={GameSettingsState.activeVehicleSrc}
      left={PlayGameState.vehiclePosition}
      width={PlayGameState.vehicleWidth}
    />
  )
})
