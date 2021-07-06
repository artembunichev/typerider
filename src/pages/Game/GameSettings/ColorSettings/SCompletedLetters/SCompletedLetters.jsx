import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

export const SCompletedLettersContainer = styled.div``
export const CompletedLettersColorInput = styled.input``

export const SCompletedLetters = observer(() => {
  const { GameSettingsStore } = useStore()

  const setCompletedLettersColor = (e) => {
    GameSettingsStore.setCompletedLettersColor(e.target.value)
  }

  return (
    <SCompletedLettersContainer>
      <CompletedLettersColorInput
        value={GameSettingsStore.completedLettersColor}
        onChange={setCompletedLettersColor}
        type='color'></CompletedLettersColorInput>
    </SCompletedLettersContainer>
  )
})
