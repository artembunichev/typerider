import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../stores/RootStore/RootStoreContext'
import { WordLetters } from '../../PlayGame/WordLetters/WordLetters'
import { SettingsMainTitle } from '../../../../components/styled/styledComponents'

const ExampleContainer = styled.div`
  padding: 6px 0;
`
const ExampleWordLetters = styled.div`
  @media (max-width: 1400px) {
    font-size: 50px;
  }
  @media (max-width: 1150px) {
    font-size: 45px;
  }
  @media (max-width: 490px) {
    font-size: 38px;
  }
  @media (max-width: 390px) {
    font-size: 34px;
  }
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
