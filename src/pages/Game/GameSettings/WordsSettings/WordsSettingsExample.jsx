import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'
import { WordLetters } from '../../PlayGame/WordLetters/WordLetters'
import { SettingsMainTitle } from '../../../../Components/Styled/StyledComponents'

const ExampleContainer = styled.div`
  padding: 6px 0;
`
const ExampleWordLetters = styled.div`
  font-size: 56px;
`

export const WordsSettingsExample = observer(() => {
  const { GameSettingsStore } = useStore()

  return (
    <ExampleContainer>
      <SettingsMainTitle>Example of your settings</SettingsMainTitle>
      <ExampleWordLetters>
        <WordLetters wordObject={GameSettingsStore.exampleWordObject} />
      </ExampleWordLetters>
    </ExampleContainer>
  )
})
