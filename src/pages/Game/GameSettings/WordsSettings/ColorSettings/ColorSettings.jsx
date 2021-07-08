import React from 'react'
import styled from 'styled-components'
import { SCompletedLetters } from './SCompletedLetters/SCompletedLetters'
import { SLetters } from './SLetters/SLetters'
import { SWordBorder } from './SWordBorder/SWordBorder'
import { SLetterBgc } from './SLetterBgc/SLetterBgc'

const ColorSettingsContainer = styled.div``

export const ColorSettings = () => {
  return (
    <ColorSettingsContainer>
      Color Settings
      <SCompletedLetters />
      <SLetters />
      <SWordBorder />
      <SLetterBgc />
    </ColorSettingsContainer>
  )
}
