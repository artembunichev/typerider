import React from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../../../../stores/RootStore/RootStoreContext'

const SLettersContainer = styled.div``
const SLettersInput = styled.input``

export const SLetters = observer(() => {
  const { GameSettingsStore } = useStore()

  const setLettersColor = (e) => {
    GameSettingsStore.setLettersColor(e.target.value)
  }
  return (
    <SLettersContainer>
      <SLettersInput type='color' onChange={setLettersColor} value={GameSettingsStore.lettersColor} />
    </SLettersContainer>
  )
})
