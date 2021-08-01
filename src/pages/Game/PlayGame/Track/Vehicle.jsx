import React, { useContext, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'
import { useScreenWidth } from '../../../../assets/hooks/useScreenWidth'

const StyledVehicle = styled.div`
  position: relative;
  top: ${(props) => {
    return props.model === 'motorbike' ? `23.8px` : props.model === 'taxi' ? `31.25px` : `34.8px`
  }};
  @media (max-width: 590px) {
    top: ${(props) => {
      return props.model === 'motorbike' ? `20.23px` : props.model === 'taxi' ? `27.25px` : `29.6px`
    }};
    width: 85px;
    height: 85px;
  }
  @media (max-width: 440px) {
    top: ${(props) => {
      return props.model === 'motorbike' ? `18.23px` : props.model === 'taxi' ? `24.25px` : `27.6px`
    }};
    width: 79px;
    height: 79px;
  }
  width: 100px;
  height: 100px;
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
  const screenWidth = useScreenWidth()
  const [vehicleWidth, setVehicleWidth] = useState(null)
  const vehicleRef = useRef(null)

  useEffect(() => {
    setVehicleWidth(vehicleRef.current.offsetWidth)
  }, [screenWidth])

  useEffect(() => {
    PlayGameState.setVehicleWidth(vehicleWidth)
  }, [vehicleWidth])

  return (
    <StyledVehicle
      ref={vehicleRef}
      style={{
        left: `${PlayGameState.vehiclePosition}px`,
      }}
      model={props.model}
      vehicle={GameSettingsStore.activeVehicleSrc}
      vehicleWidth={PlayGameState.vehicleWidth}
    />
  )
})
