import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Vehicle } from './Vehicle/Vehicle'
import { GameStoreContext, useStore } from '../../../../stores/RootStore/RootStoreContext'

const TrackContainer = styled.div`
  padding: 50px;
`
const StyledTrack = styled.div`
  position: relative;
  width: ${(props) => {
    return `${props.length}px`
  }};
  border-bottom: 3px dashed #000000;
`

export const Track = observer(() => {
  const { GameSettingsStore } = useStore()
  const { PlayGameState } = useContext(GameStoreContext)
  
  return (
    <TrackContainer>
      <StyledTrack length={PlayGameState.trackLength}>
        <Vehicle model={GameSettingsStore.activeVehicleModel} />
      </StyledTrack>
    </TrackContainer>
  )
})
