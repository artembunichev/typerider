import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameStoreContext } from '../../../../../../stores/RootStore/RootStoreContext';

export const SCompletedLettersContainer = styled.div``
export const CompletedLettersColorInput = styled.input``

export const SCompletedLetters = observer(() => {
  const GameStore = useContext(GameStoreContext)

  const setCompletedLettersColor = (e) => {
    GameStore.setCompletedLettersColor(e.target.value)
  }

  return (
    <SCompletedLettersContainer>
      <CompletedLettersColorInput
        disabled={GameStore.gameMode}
        value={GameStore.completedLettersColor}
        onChange={setCompletedLettersColor}
        type='color'
      />
    </SCompletedLettersContainer>
  )
})
