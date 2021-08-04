import React from 'react'
import styled from 'styled-components'
import { TimeForRace } from './SettingsForRace/TimeForRace'
import { VehicleForRace } from './SettingsForRace/VehicleForRace'
import { SettingsMainTitle } from '../../../../components/styled/styledComponents'

const GlobalSettingsContainer = styled.div``
const GlobalSettingsItems = styled.div`
  padding: 6px 0;
`

export const GlobalSettings = () => {
  return (
    <GlobalSettingsContainer>
      <SettingsMainTitle>Race Settings</SettingsMainTitle>
      <GlobalSettingsItems>
        <TimeForRace />
        <VehicleForRace />
      </GlobalSettingsItems>
    </GlobalSettingsContainer>
  )
}
