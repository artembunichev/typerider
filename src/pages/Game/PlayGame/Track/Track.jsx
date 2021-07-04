import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Vehicle } from './Vehicle/Vehicle'

const TrackContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`
const StyledTrack = styled.div`
  position: relative;
  width: 85%;
  border-bottom: 3px dashed #000000;
`

export const Track = observer(() => {
  return (
    <TrackContainer>
      <StyledTrack>
        <Vehicle />
      </StyledTrack>
    </TrackContainer>
  )
})
