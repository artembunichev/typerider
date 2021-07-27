import React from 'react'
import styled from 'styled-components'
import { TimeForRace } from './SettingsForRace/TimeForRace'
import { VehicleForRace } from './SettingsForRace/VehicleForRace'

const GlobalSettingsContainer = styled.div``

export const GlobalSettings = () => {
  return (
    <GlobalSettingsContainer>
      <TimeForRace />
      <VehicleForRace />
    </GlobalSettingsContainer>
  )
}
