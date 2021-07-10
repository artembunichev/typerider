import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext, useStore } from '../../../../../../stores/RootStore/RootStoreContext'

export const SCompletedLettersContainer = styled.div``
export const CompletedLettersColorInput = styled.input``

export const SCompletedLetters = observer(() => {
  const { AppStore } = useStore()
  const { GameSettingsState } = useContext(GameStoreContext)

  const setCompletedLettersColor = (e) => {
    GameSettingsState.setCompletedLettersColor(e.target.value)
  }

  return (
    <SCompletedLettersContainer>
      <CompletedLettersColorInput
        disabled={AppStore.gameMode}
        value={GameSettingsState.completedLettersColor}
        onChange={setCompletedLettersColor}
        type='color'
      />
    </SCompletedLettersContainer>
  )
})
