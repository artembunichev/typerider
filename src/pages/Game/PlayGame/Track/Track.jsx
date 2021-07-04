import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Vehicle } from './Vehicle/Vehicle'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'

const TrackContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`
const StyledTrack = styled.div`
  position: relative;
  width: ${(props) => {
    return `${props.length}px`
  }};
  border-bottom: 3px dashed #000000;
`

export const Track = observer(() => {
  const { GameStore, GameSettingsStore } = useStore()
  return (
    <TrackContainer>
      <StyledTrack length={GameStore.trackLength}>
        <Vehicle model={GameSettingsStore.activeVehicleModel} />
      </StyledTrack>
    </TrackContainer>
  )
})
