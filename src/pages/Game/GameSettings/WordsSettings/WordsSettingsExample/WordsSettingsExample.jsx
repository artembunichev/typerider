import React, { useContext } from 'react'
import { WordLetters } from '../../../PlayGame/WordLetters/WordLetters'
import { observer } from 'mobx-react-lite'
import { GameStoreContext } from '../../../../../stores/RootStore/RootStoreContext';

export const WordsSettingsExample = observer(() => {
  const {GameSettingsState} = useContext(GameStoreContext)
  return <WordLetters wordObject={GameSettingsState.exampleWordObject} />
})
