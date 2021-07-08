import React from 'react'
import { WordLettersContainer, WordLettersWrapper } from '../../../PlayGame/WordLetters/WordLetters'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'
import { WordLetter } from '../../../PlayGame/WordLetters/WordLetter/WordLetter'
import { observer } from 'mobx-react-lite'

export const WordsSettingsExample = observer(() => {
  const { GameSettingsStore } = useStore()
  const exampleWord = GameSettingsStore.exampleWord.map((l) => {
    return <WordLetter key={l.id} letter={l.letter} completed={l.isCompleted} />
  })
  return (
    <WordLettersWrapper>
      <WordLettersContainer wordBorder={GameSettingsStore.wordBorder}>{exampleWord}</WordLettersContainer>
    </WordLettersWrapper>
  )
})
