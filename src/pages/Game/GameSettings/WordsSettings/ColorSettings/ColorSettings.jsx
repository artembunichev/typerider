import React from 'react'
import styled from 'styled-components'
import { SCompletedLetters } from '../SCompletedLetters/SCompletedLetters'
import { SLetters } from './SLetters/SLetters'

const ColorSettingsContainer = styled.div``

export const ColorSettings = () => {
  return (
    <ColorSettingsContainer>
      Color Settings
      <SCompletedLetters />
      <SLetters />
    </ColorSettingsContainer>
  )
}
