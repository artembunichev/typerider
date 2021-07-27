import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../stores/RootStore/RootStoreContext';
import { WordLetters } from '../../PlayGame/WordLetters/WordLetters'

export const WordsSettingsExample = observer(() => {
  const { GameSettingsStore } = useStore()

  return <WordLetters wordObject={GameSettingsStore.exampleWordObject} />
})
