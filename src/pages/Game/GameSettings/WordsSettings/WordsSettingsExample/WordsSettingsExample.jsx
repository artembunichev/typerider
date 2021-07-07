import React from 'react'
import { WordLettersContainer } from '../../../PlayGame/WordLetters/WordLetters'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'
import { WordLetter } from '../../../PlayGame/WordLetters/WordLetter/WordLetter'

export const WordsSettingsExample = () => {
  const { GameSettingsStore } = useStore()
  const exampleWord = GameSettingsStore.exampleWord.map((l) => {
    return <WordLetter key={l.id} letter={l.letter} completed={l.isCompleted} />
  })
  return <WordLettersContainer>{exampleWord}</WordLettersContainer>
}
