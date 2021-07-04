import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const StyledVehicle = styled.div`
  position: absolute;
  bottom: 1px;
  left: ${(props) => {
    return props.left + 'px'
  }};
  width: 50px;
  height: 50px;
  background-color: #ff9900;
`

export const Vehicle = observer(() => {
  const { GameStore } = useStore()

  return <StyledVehicle left={GameStore.vehiclePosition} />
})
