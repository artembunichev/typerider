import React from 'react'
import styled from 'styled-components'
import { ColorSettings } from './ColorSettings/ColorSettings'
import { WordsSettingsExample } from './WordsSettingsExample/WordsSettingsExample'

const WordsSettingsContainer = styled.div``

export const WordsSettings = () => {
  return (
    <WordsSettingsContainer>
      <ColorSettings />
      <WordsSettingsExample />
    </WordsSettingsContainer>
  )
}
