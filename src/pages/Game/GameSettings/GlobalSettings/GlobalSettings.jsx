import React from 'react'
import styled from 'styled-components'
import { TimeForRace } from '../TimeForRace/TimeForRace'
import { VehicleForRace } from '../VehicleForRace/VehicleForRace'

const GlobalSettingsContainer = styled.div``

export const GlobalSettings = () => {
  return (
    <GlobalSettingsContainer>
      <TimeForRace />
      <VehicleForRace />
    </GlobalSettingsContainer>
  )
}
