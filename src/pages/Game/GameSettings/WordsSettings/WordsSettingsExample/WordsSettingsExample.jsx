import React from 'react'
import { WordLetters } from '../../../PlayGame/WordLetters/WordLetters'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'
import { observer } from 'mobx-react-lite'

export const WordsSettingsExample = observer(() => {
  const { GameSettingsStore } = useStore()
  return <WordLetters wordObject={GameSettingsStore.exampleWordObject} />
})
