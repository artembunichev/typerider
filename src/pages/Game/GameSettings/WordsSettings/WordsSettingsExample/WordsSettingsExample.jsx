import React from 'react'
import { WordLetters } from '../../../PlayGame/WordLetters/WordLetters'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

export const WordsSettingsExample = observer(() => {
  const { GameSettingsStore } = useStore()

  return <WordLetters wordObject={GameSettingsStore.exampleWordObject} />
})
