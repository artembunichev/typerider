import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'
import { WordLetters } from '../../PlayGame/WordLetters/WordLetters'
import { SettingsMainTitle } from '../../../../Components/Styled/StyledComponents'

const ExampleContainer = styled.div`
  font-size: 57px;
  padding: 6px 0;
`

export const WordsSettingsExample = observer(() => {
  const { GameSettingsStore } = useStore()

  return (
    <ExampleContainer>
      <SettingsMainTitle>Example of your settings</SettingsMainTitle>
      <WordLetters wordObject={GameSettingsStore.exampleWordObject} />
    </ExampleContainer>
  )
})
