import React, { useContext } from 'react'
import { WordLetters } from '../../../PlayGame/WordLetters/WordLetters'
import { observer } from 'mobx-react-lite'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext';

export const WordsSettingsExample = observer(() => {
  const GameStore = useContext(GameStoreContext)
  return <WordLetters wordObject={GameStore.exampleWordObject} />
})
