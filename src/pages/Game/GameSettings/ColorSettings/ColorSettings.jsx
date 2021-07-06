import React from 'react'
import styled from 'styled-components'
import { SCompletedLetters } from './SCompletedLetters/SCompletedLetters'

const ColorSettingsContainer = styled.div``

export const ColorSettings = () => {
  return (
    <ColorSettingsContainer>
      Color Settings
      <SCompletedLetters />
    </ColorSettingsContainer>
  )
}
